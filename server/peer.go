package main

import (
	"errors"
	"github.com/go/src/sync/atomic"
	"github.com/gorilla/websocket"
	"strconv"
	"sync"
	"time"
)

const (
	PEER_AVAILABLE   = "available"
	PEER_UNAVAILABLE = "unavailable"
	PEER_BUSY        = "busy"
)

type Peer struct {
	ID int

	rooms map[int]*Room
	ws    *websocket.Conn

	exitChan     chan int
	roomExitChan chan *Room
	sendChan     chan *Message
	ccUpdateChan chan *CurrentChannel

	username string
	Status   string

	cc *CurrentChannel
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

func NewPeer(ws *websocket.Conn, id int, username string) (*Peer, error) {
	peer := &Peer{
		ws:    ws,
		ID:    id,
		rooms: make(map[int]*Room),

		sendChan:     make(chan *Message, 10),
		exitChan:     make(chan int),
		roomExitChan: make(chan *Room),
		ccUpdateChan: make(chan *CurrentChannel),

		username: username,
	}

	// get current channel
	cc, err := getCurrentChannel(id)
	if err != nil {
		return nil, err
	}
	peer.cc = cc

	peers.set(peer)

	return peer, nil
}

// read the message other members talk
func (p *Peer) run() {
	pingTicker := time.NewTicker(5 * time.Second)
	updateTicker := time.NewTicker(1 * time.Second)
	defer func() {
		pingTicker.Stop()
		updateTicker.Stop()
		p.ws.Close()
	}()

	for {
		select {
		case message, ok := <-p.sendChan:
			if !ok {
				p.ws.WriteMessage(websocket.CloseMessage, []byte{})
				goto exit
			}

			// send the message
			if err := p.ws.WriteJSON(message); err != nil {
				goto exit
			}

			if p.cc.Type != TAB_LOBBY && p.cc.ID == message.RoomID && message.Action == TypeTalk {
				p.cc.LastMsgID = message.ID
				p.cc.updateFlag = 1
			}
			continue
		case room := <-p.roomExitChan:
			delete(p.rooms, room.ID)
		case cc, _ := <-p.ccUpdateChan:
			if p.cc.updateFlag == 1 {
				go p.logLastReadMsgID(p.ID, p.cc.ID, p.cc.LastMsgID)
			}

			p.cc = cc
			p.cc.updateFlag = 1
			continue
		case <-pingTicker.C:
			if err := p.ws.WriteMessage(websocket.PingMessage, []byte{}); err != nil {
				close(p.exitChan)
			}
			continue
		case <-updateTicker.C:
			if atomic.CompareAndSwapInt32(&p.cc.updateFlag, 1, 0) {
				go p.logLastReadMsgID(p.ID, p.cc.ID, p.cc.LastMsgID)
			}
			continue

		case <-p.exitChan:
			goto exit
		}
	}

exit:
	for _, room := range p.rooms {
		p.sayBye(room.ID)
		room.peerLeave(p)
	}
}

func (p *Peer) send(message *Message) {
	select {
	case p.sendChan <- message:
	case <-p.exitChan:
	}
}

func (p *Peer) roomExit(room *Room) {
	select {
	case p.roomExitChan <- room:
	case <-p.exitChan:
	}
}

func (p *Peer) ccUpdate(cc *CurrentChannel) {
	select {
	case p.ccUpdateChan <- cc:
	case <-p.exitChan:
	}
}

func (p *Peer) logLastReadMsgID(userID, roomID int, msgID int64) {
	db := rdbPool.Get()
	defer db.Close()
	logger.debug("save message ", msgID, " to ", roomID)
	db.HSET(genRedisKey(LAST_READ_MSG, strconv.Itoa(roomID)), userID, msgID)
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

func (p *Peer) processMessage(message *Message) error {

	logger.debug(p.ID, " send ", message.Content, " to room ", message.RoomID)

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

		nextMsgID, err := room.nextMsgID()
		if err != nil {
			return err
		}

		message.ID = nextMsgID
		message.Username = p.username
		message.Time = time.Now().Format(TIME_LAYOUT)

		if err := logMessage(message); err != nil {
			return err
		}
	case TypeStatusUpdate:
		message.Content = p.Status
	case TypePeerJoin, TypePeerLeave:
		message.Username = p.username
		message.Time = time.Now().Format(TIME_LAYOUT)
	}

	room.broadcase(message)

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

	return room.peerJoin(p)
}

func (p *Peer) leaveRoom(roomID int) {
	room, _ := p.rooms[roomID]
	room.Lock()
	delete(room.peers, p)
	room.Unlock()

	delete(p.rooms, roomID)

	room.peerLeave(p)
}

func (p *Peer) sayHi(roomID int) {
	message := &Message{
		Action:  TypeStatusUpdate,
		RoomID:  roomID,
		Content: p.Status,
	}
	p.processMessage(message)
}

func (p *Peer) sayBye(roomID int) {
	message := &Message{
		Action:  TypeStatusUpdate,
		RoomID:  roomID,
		Content: PEER_UNAVAILABLE,
	}
	p.processMessage(message)
}

func (p *Peer) setStatus(status string) error {
	p.Status = status
	return saveUserStatus(p.ID, status)
}
