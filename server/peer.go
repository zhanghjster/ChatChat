package main
import (
	"github.com/gorilla/websocket"
	"log"
	"time"
	"encoding/json"
	"fmt"
)

type Peer struct {
	ID     int
	// Chan for send message
	sendChan chan []byte

	rooms map[int]*Room
	ws *websocket.Conn
}

func NewPeer(ws *websocket.Conn, id int) *Peer {
	return &Peer{
		sendChan: make(chan []byte),
		ws:       ws,
		ID:       id,
		rooms: make(map[int]*Room),
	}
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
		case <- ticker.C:
			if err := p.write(websocket.PingMessage, []byte{}); err != nil {
				return
			}
		}
	}
}

// talk message to other member
func (p *Peer) talk() {

	for {
		_, message, err := p.ws.ReadMessage()
		if err != nil {
			break
		}

		p.processMessage(message)
	}
}

func (p *Peer) processMessage(message []byte) {

	data := struct {
		Action  int    `json:"a"`
		Message string `json:"m"`
		RoomID  int	   `json:"r"`
	}{}
	s := string(message[:])
	log.Println("string is " + s)
	// parse the message
	err := json.Unmarshal(message, &data)
	if err != nil {
		return
	}

	switch int(data.Action) {
	case TypeMessage:
		if len(data.Message) == 0 {
			return
		}

		if room, exists := p.rooms[data.RoomID]; exists {
			content := struct {
				Action  int    `json:"a"`
				PeerID  int    `json:"p"`
				Message string `json:"m"`
				RoomID  int		`json:"r"`
				Time    int64  `json:"t"`
			}{
				TypeMessage,
				p.ID,
				data.Message,
				room.ID,
				time.Now().Unix(),
			}

			message, err := json.Marshal(content)
			if err != nil {
				return
			}

			room.broadcastPacket(message)
		}
	}
}

func (p *Peer) joinRoom(roomID int) (suc bool) {
	defer func() {
		if r := recover(); r != nil {
			fmt.Println("err ", r)
			suc = false
		}
	}()

	var room *Room
	var exist bool

	rooms.Lock()

	if room, exist = rooms.get(roomID); !exist {
		room = NewRoom(roomID)
	}

	rooms.Unlock()

	// panic if room is closed
	room.registerChan <- p

	p.rooms[roomID] = room
	return true
}

func (p *Peer) leaveRoom(roomID int) {
	defer func() { recover() }()
	room, _ := p.rooms[roomID]
	room.Lock()
	delete(room.peers, p)
	room.Unlock()
	delete(p.rooms, roomID)
	// panic if room is closed
	room.unregisterChan <- p
}