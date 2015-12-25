package main
import (
	"github.com/gorilla/websocket"
	"log"
	"time"
	"encoding/json"
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
}

func NewPeer(ws *websocket.Conn, id int, username string) *Peer {
	return &Peer{
		sendChan: make(chan []byte),
		ws:       ws,
		ID:       id,
		rooms: make(map[int]*Room),
		
		exitChan: make(chan int),
		roomExitChan: make(chan *Room),
		username: username,
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

// talk message to other member
func (p *Peer) talk() {
	defer func() {
		close(p.exitChan)
		p.ws.Close()
	}()

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
				Time    string  `json:"t"`
				Username string `json:"u"`
			}{
				TypeMessage,
				p.ID,
				data.Message,
				room.ID,
				time.Now().Format(TIME_LAYOUT),
				p.username,
			}

			message, err := json.Marshal(content)
			if err != nil {
				return
			}
			select {
			case room.broadcastChan <- message:
			case <- room.exitChan:
			}
		}
	}
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