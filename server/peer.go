package main
import (
	"github.com/gorilla/websocket"
	"time"
	"encoding/json"
	"errors"
	"sync"
	"github.com/go/src/fmt"
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
			fmt.Println("go to exit")
			goto exit
		}
	}

	exit:
	for _, room := range p.rooms {
		p.sayBye(room.ID)
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

func (p *Peer) sayBye(roomID int) {
	message := &Message{
		Action: TypeStatusUpdate,
		RoomID: roomID,
		Content: PEER_UNAVAILABLE,
	}
	p.processMessage(message)
}

func (p *Peer) setStatus(status string) error {
	p.Status = status
	return saveUserStatus(p.ID, status)
}

func (p *Peer) processMessage(message *Message) error {
	fmt.Println(p.ID, " send message ", message.Content , "to ", message.RoomID)

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
	case TypePeerJoin , TypePeerLeave:
		message.Username = p.username
		message.Time = time.Now().Format(TIME_LAYOUT)
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
