package main
import (
	"time"
	"github.com/gorilla/websocket"
	"log"
	"encoding/json"
)

const(
	TypeMessage = 1
)

type Room struct {
	ID string
	time time.Time
	peers map[*Peer]bool

	broadcastChan chan *Packet

	registerChan chan  *Peer
	unregisterChan chan *Peer

}

type Peer struct {
	ID string
	roomID string

	// Chan for send message
	sendChan chan []byte

	ws *websocket.Conn
}

type Packet struct {
	ExludePeer map[string]bool
	Payload []byte
}

// Rooms
var rooms = make(map[string]*Room)

func NewRoom(roomID string) *Room {
	db := rdbPool.Get()
	defer  db.Close()

	if roomID == "" {
		roomID = GUID(32)
	}

	rooms[roomID] = &Room{
		ID : roomID,

		broadcastChan:make(chan *Packet),
		registerChan: make(chan *Peer),
		unregisterChan:make(chan *Peer),

		peers: make(map[*Peer]bool),

		time: time.Now(),
	}

	go rooms[roomID].run()

	return rooms[roomID]
}

func (r *Room) run() {

	log.Println("[Room] Start " + r.ID)

	for {
		select {
		// peer join the room
		case peer, ok := <-r.registerChan:
			if ok {
				r.peers[peer] = true
				log.Println("peer join " + peer.ID)
			}

		// peer left room
		case peer, ok := <- r.unregisterChan:
			if ok {
				delete(r.peers, peer)

				log.Println("peer left " + peer.ID)
			}

		// fanout the message to peers
		case packet, ok := <- r.broadcastChan:
			if ok {
				for peer := range r.peers {
					exclude := packet.ExludePeer
					if (exclude != nil && exclude[peer.ID]) {
						continue
					}

					select {
					// write message to peer's send channel
					case peer.sendChan <- packet.Payload:


					}
				}
			}
		}
	}
}

func (r *Room) broadcastPacket(packet *Packet) {
	if len(r.peers) > 0 {
		r.broadcastChan <- packet
	}
}

// ------------------- Peer Methods ----------------------//
func (p *Peer) write(messageType int, payload []byte) error{
	return p.ws.WriteMessage(messageType, payload)
}

// read the message other members talk
func (p *Peer) read() {
	log.Println("pear start read :" + p.ID)
	for {
		select {
		case message, ok := <-p.sendChan:
			if !ok {
				p.write(websocket.CloseMessage, []byte{})
				return
			}
			log.Println("peer " + p.ID + " read: " + string(message[:]))
			// send the message
			p.write(websocket.TextMessage, message)
		}
	}
}

// talk message to other member
func (p *Peer) talk() {
	log.Println("pear start tall :" + p.ID)

	// TODO: handle ping and pong

	// TODO: maximum message length

	for {
		_, message, err := p.ws.ReadMessage()
		if err != nil { break }

		p.processMessage1(message)
	}

}

func (p *Peer) processMessage1(message []byte) {
	s := string(message[:])
	log.Println("peer " + p.ID + " said: " + s)


	var packet = &Packet{
		Payload: message,
//		ExludePeer: map[string]bool{p.ID:true},
	}

	room := rooms[p.roomID]

	room.broadcastPacket(packet)
}

func (p *Peer) processMessage(message []byte) {

	data := struct{
		Action int `json:"a"`
		Message string `json:"m"`
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
		if (len(data.Message) == 0) {
			return
		}

		room, exists := rooms[p.roomID]
		if exists {
			content := struct{
				Action int 		`json:"a"`
				PeerID string 	`json:"p"`
				Message string 	`json:"m"`
				Time int64		`json:"t"`
			} {
				TypeMessage,
				p.ID,
				data.Message,
				time.Now().UTC().Unix(),
			}

			// wrap the message then send
			payload, err := json.Marshal(content)
			if err != nil {
				return
			}
			var packet = &Packet{
				Payload: payload,
				ExludePeer: map[string]bool{p.ID:true},
			}
			room.broadcastPacket(packet)
		}
	}
}