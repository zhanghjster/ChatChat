package main
import (
	"github.com/gorilla/websocket"
	"log"
	"time"
	"encoding/json"
	"strconv"
	"errors"
	"sync"
)

const (
	PEER_AVAILABLE   = "available"
	PEER_UNAVAILABLE = "unavailable"
	PEER_BUSY        = "busy"
)

type Peer struct {
	ID     int
	// Chan for send message
	sendChan chan []byte

	rooms map[int]*Room
	ws *websocket.Conn

	exitChan chan int
	roomExitChan chan *Room
	username string
	Status string
}

type Peers struct {
	sync.RWMutex
	peers map[int]*Peer
}

func (ps *Peers) get(id int) (*Peer, bool) {
	ps.RLock()
	ps.RUnlock()

	peer, ok := ps.peers[id]
	return peer, ok
}

func (ps *Peers) set(peer *Peer) {
	ps.Lock()
	ps.Unlock()
	ps.peers[peer.ID] = peer
}

var peers = &Peers{
	peers: make(map[int]*Peer),
}

func NewPeer(ws *websocket.Conn, id int, username string) *Peer {
	peer := &Peer{
		sendChan: make(chan []byte),
		ws:       ws,
		ID:       id,
		rooms: make(map[int]*Room),
		
		exitChan: make(chan int),
		roomExitChan: make(chan *Room),
		username: username,
	}

	peers.set(peer);

	return peer;
}

func (p *Peer) write(messageType int, payload []byte) error {
	return p.ws.WriteMessage(messageType, payload)
}

// read the message other members talk
func (p *Peer) read() {
	ticker := time.NewTicker(5 * time.Second)
	defer func() {
		ticker.Stop()
		p.ws.Close()
	}()

	for {
		select {
		case message, ok := <-p.sendChan:
			if !ok {
				p.write(websocket.CloseMessage, []byte{})
				return
			}
			// send the message
			if err := p.write(websocket.TextMessage, message); err != nil {
				return
			}
			continue
		case room := <- p.roomExitChan:
			delete(p.rooms, room.ID)
		case <- ticker.C:
			if err := p.write(websocket.PingMessage, []byte{}); err != nil {
				close(p.exitChan)
			}
			continue
		case <- p.exitChan:
			goto exit
		}
	}

	exit:
	for _, room := range p.rooms {
		select {
		case room.unregisterChan <- p:
		case <- room.exitChan:
		}
	}
}

// read message from conn and talk
func (p *Peer) readMessage() {
	defer func() {
		close(p.exitChan)
		p.ws.Close()
	}()

	for {
		message := &Message{}
		err := p.ws.ReadJSON(message)
		if err != nil {
			break
		}

		p.processMessage(message)
	}
}

func (p *Peer) sayHi(roomID int) {
	message := &Message{
		Action: TypeStatusUpdate,
		RoomID: roomID,
		Content: p.Status,
	}
	p.processMessage(message)
}

func (p *Peer) setStatus(status string) error {
	p.Status = status
	return saveUserStatus(p.ID, status)
}

func (p *Peer) processMessage(message *Message) error {

	log.Println("message is ", message)

	room, ok := p.rooms[message.RoomID]
	if !ok {
		return errors.New("NO ROON")
	}

	message.PeerID = p.ID

	switch int(message.Action) {
	case TypeTalk:
		if len(message.Content) == 0 {
			return nil
		}

		nextMsgID, err := nextMsgID(message.RoomID)
		if err != nil {
			return err
		}

		message.ID = nextMsgID
		message.Username = p.username
		message.Time = time.Now().Format(TIME_LAYOUT)

		if  err := saveMessage(message); err != nil {
			return err
		}
	case TypeStatusUpdate:
		message.Content = p.Status
	}

	// sent message to peers
	msg, err := json.Marshal(message)
	if err != nil {
		return err
	}
	select {
	case room.broadcastChan <- msg:
	case <- room.exitChan:
	}
	return nil
}

func (p *Peer) joinRoom(roomID int) (suc bool) {
	var room *Room
	var exist bool

	rooms.Lock()

	if room, exist = rooms.get(roomID); !exist {
		room = NewRoom(roomID)
	}

	rooms.Unlock()

	select {
	case room.registerChan <- p:
		p.rooms[roomID] = room
		return true
	case <-room.exitChan:
		return false
	}
}

func (p *Peer) leaveRoom(roomID int) {
	room, _ := p.rooms[roomID]
	room.Lock()
	delete(room.peers, p)
	room.Unlock()

	delete(p.rooms, roomID)

	select {
	case room.unregisterChan <- p:
	case <- room.exitChan:
	}
}

func peerInRoom(userID, roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	if exists, _ := roomExist(roomID); !exists {
		return false, errors.New("room not exists")
	}

	if _, err := db.ZRANK(genRedisKey(PEER_ROOM_PRE, strconv.Itoa(userID)), roomID); err != nil {
		return false, err
	}

	if _, err := db.ZRANK(genRedisKey(ROOM_PEER_PRE, strconv.Itoa(roomID)), userID); err != nil {
		return false, err
	}

	return true, nil
}

func getPeerIDofRoom(roomID int) (*[]int, error) {
	db := rdbPool.Get()
	defer db.Close()

	var peerID []int
	if err := db.ZRANGE(&peerID, genRedisKey(ROOM_PEER_PRE, strconv.Itoa(roomID)), 0, -1); err != nil {
		return nil, err
	}

	return &peerID, nil
}