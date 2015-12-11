package main

import (
	"encoding/json"
	"errors"
	"github.com/garyburd/redigo/redis"
	"github.com/gorilla/websocket"
	"log"
	"strconv"
	"time"
)

const (
	TypeMessage      = 1
	PEER_AVAILABLE   = "available"
	PEER_UNAVAILABLE = "unavailable"
	PEER_BUSY        = "busy"
)

type RoomRaw struct {
	ID             int    `redis:"id"`
	OwnerID        int    `redis:"ownerID"`
	Name           string `redis:"name"`
	CreationTime   int64  `redis:"creationTime"`
	LastUpdateTime int64  `redis:"lastUpdateTime"`
	Password       string `redis:"password"`
	IsPrivate      bool   `redis:"isPrivate"`
	Members        int    `redis:"members"`
	Hash           string `redis:"hash"`
	Description    string `redis:"description"`
}

type Room struct {
	ID    int
	hash  string
	peers map[*Peer]bool

	broadcastChan chan *Packet

	registerChan   chan *Peer
	unregisterChan chan *Peer

	time int
}

type Peer struct {
	ID     int
	roomID int

	// Chan for send message
	sendChan chan []byte

	ws *websocket.Conn
}

type Packet struct {
	ExludePeer map[int]bool
	Payload    []byte
}

type Message struct {
	ID       int64  `json:"id"`
	Username string `json:"username"`
	Time     string `json:"time"`
	Content  string `json:"content"`
}

const (
	TAB_LOBBY = "TAB_LOBBY"
	TAB_ROOM  = "TAB_ROOM"
	TAB_PEER  = "TAB_PEER"
)

// Rooms
var rooms = make(map[int]*Room)

func NewRoom(roomID int) *Room {
	db := rdbPool.Get()
	defer db.Close()

	rooms[roomID] = &Room{
		ID: roomID,

		broadcastChan:  make(chan *Packet),
		registerChan:   make(chan *Peer),
		unregisterChan: make(chan *Peer),

		peers: make(map[*Peer]bool),

		time: int(time.Now().Unix()),
	}

	go rooms[roomID].run()

	return rooms[roomID]
}

func (r *Room) run() {

	for {
		select {
		// peer join the room
		case peer, ok := <-r.registerChan:
			if ok {
				r.peers[peer] = true
			}

		// peer left room
		case peer, ok := <-r.unregisterChan:
			if ok {
				delete(r.peers, peer)
			}

		// fanout the message to peers
		case packet, ok := <-r.broadcastChan:
			if ok {
				for peer := range r.peers {
					exclude := packet.ExludePeer
					if exclude != nil && exclude[peer.ID] {
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
func (p *Peer) write(messageType int, payload []byte) error {
	return p.ws.WriteMessage(messageType, payload)
}

// read the message other members talk
func (p *Peer) read() {
	for {
		select {
		case message, ok := <-p.sendChan:
			if !ok {
				p.write(websocket.CloseMessage, []byte{})
				return
			}
			// send the message
			p.write(websocket.TextMessage, message)
		}
	}
}

// talk message to other member
func (p *Peer) talk() {
	// TODO: handle ping and pong

	// TODO: maximum message length

	for {
		_, message, err := p.ws.ReadMessage()
		if err != nil {
			break
		}

		p.processMessage1(message)
	}

}

func (p *Peer) processMessage1(message []byte) {

	var packet = &Packet{
		Payload: message,
		//		ExludePeer: map[string]bool{p.ID:true},
	}

	room := rooms[p.roomID]

	room.broadcastPacket(packet)
}

func (p *Peer) processMessage(message []byte) {

	data := struct {
		Action  int    `json:"a"`
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
		if len(data.Message) == 0 {
			return
		}

		room, exists := rooms[p.roomID]
		if exists {
			content := struct {
				Action  int    `json:"a"`
				PeerID  int    `json:"p"`
				Message string `json:"m"`
				Time    int64  `json:"t"`
			}{
				TypeMessage,
				p.ID,
				data.Message,
				time.Now().Unix(),
			}

			// wrap the message then send
			payload, err := json.Marshal(content)
			if err != nil {
				return
			}
			var packet = &Packet{
				Payload:    payload,
				ExludePeer: map[int]bool{p.ID: true},
			}
			room.broadcastPacket(packet)
		}
	}
}

func getRoomID2NameMap(userID int) (*[]interface{}, error) {
	db := rdbPool.Get()
	defer db.Close()

	// get user's room id
	var roomID []int

	err := db.ZREVRANGE(&roomID, genRedisKey(PEER_ROOM_PRE, strconv.Itoa(userID)), 0, -1)
	if err != nil {
		return nil, err
	}

	var ID2Name = make([]interface{}, len(roomID))

	// get room name
	for i, id := range roomID {
		roomName, _ := redis.String(db.HGET(genRedisKey(ROOM_CACHE_PRE, strconv.Itoa(id)), "name"))
		ID2Name[i] = struct {
			ID   int
			Name string
		}{ID: id, Name: roomName}
	}

	return &ID2Name, nil
}

func saveRoomRaw(roomRaw *RoomRaw) (int, error) {
	db := rdbPool.Get()
	defer db.Close()

	nextRoomID, _ := db.INCRBY(genRedisKey(ROOM_NEXT_ID_PRE, ""), 1)
	roomID := int(nextRoomID)

	err := db.HMSET(genRedisKey(ROOM_CACHE_PRE, strconv.FormatInt(nextRoomID, 10)),
		"id", roomID,
		"ownerID", roomRaw.OwnerID,
		"name", roomRaw.Name,
		"creationTime", time.Now().Unix(),
		"lastUpdateTime", time.Now().Unix(),
		"password", roomRaw.Password,
		"isPrivate", roomRaw.IsPrivate,
		"members", roomRaw.Members,
		"hash", roomRaw.Hash,
		"description", roomRaw.Description,
	)

	if err != nil {
		return 0, err
	}
	// save room id index
	if _, err := db.ZADD(genRedisKey(ROOM_ID_INDEX_PRE, ""), roomID, roomID); err != nil {
		return 0, err
	}

	// owner join the room
	if _, err := peerJoinRoom(roomRaw.OwnerID, roomID); err != nil {
		return 0, err
	}

	return roomID, nil
}

func getNewRoomIDs(offset, limit int) ([]int, error) {
	db := rdbPool.Get()
	defer db.Close()

	var out []int
	err := db.ZREVRANGE(&out, genRedisKey(ROOM_ID_INDEX_PRE, ""), offset, offset+limit-1)
	if err != nil {
		return nil, err
	}

	return out, nil
}

func getRoomRaw(roomID int) (*RoomRaw, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomRaw := &RoomRaw{}
	db.HGETALL(genRedisKey(ROOM_CACHE_PRE, strconv.Itoa(roomID)), roomRaw)
	return roomRaw, nil
}

func peerJoinRoom(userID, roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomIDStr := strconv.Itoa(roomID)

	if exists, _ := roomExists(roomID); !exists {
		return false, nil
	}

	// add room to peer's room list
	_, err := db.ZADD(genRedisKey(PEER_ROOM_PRE, strconv.Itoa(userID)),
		time.Now().Unix(), roomID,
	)

	if err != nil {
		return false, err
	}

	// add peer to room's peer list
	_, err1 := db.ZADD(genRedisKey(ROOM_PEER_PRE, roomIDStr),
		time.Now().Unix(), userID,
	)
	if err1 != nil {
		return false, err1
	}

	// increase room member count
	_, err2 := db.HINCRBY(genRedisKey(ROOM_CACHE_PRE, roomIDStr), "members", 1)
	if err2 != nil {
		return false, err2
	}

	return true, nil
}

func peerLeaveRoom(userID, roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomIDstr := strconv.Itoa(roomID)

	if exists, _ := roomExists(roomID); !exists {
		return false, errors.New("room not exists")
	}

	// remove room from peer's room list
	if err := db.ZREM(genRedisKey(PEER_ROOM_PRE, strconv.Itoa(userID)), roomID); err != nil {
		return false, err
	}

	// remove peer from room's peer list
	if _, err := db.ZADD(genRedisKey(ROOM_PEER_PRE, roomIDstr), userID); err != nil {
		return false, err
	}

	// decrease the room member
	if _, err := db.HINCRBY(genRedisKey(ROOM_CACHE_PRE, roomIDstr), "members", -1); err != nil {
		return false, err
	}

	return true, nil
}

func peerInRoom(userID, roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	if exists, _ := roomExists(roomID); !exists {
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

func roomExists(roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()
	return db.EXISTS(genRedisKey(ROOM_CACHE_PRE, strconv.Itoa(roomID)))
}

func saveMessage(username string, roomID int, content string) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomIDStr := strconv.Itoa(roomID)

	nextMsgID, err := db.INCRBY(genRedisKey(ROOM_NEXT_MSG_ID_PRE, roomIDStr), 1)
	if err != nil {
		return false, err
	}

	message := &Message{
		ID:       nextMsgID,
		Username: username,
		Content:  content,
		Time:     time.Now().Format(TIME_LAYOUT),
	}

	messageB, err := json.Marshal(message)
	if err != nil {
		return false, err
	}

	if _, err := db.ZADD(genRedisKey(ROOM_MSG_CACHE_PRE, roomIDStr), nextMsgID, string(messageB)); err != nil {
		return false, err
	}

	return true, nil
}

func getMessages(roomID int, lastID int64, limit int64) (*[]Message, error) {
	db := rdbPool.Get()
	defer db.Close()

	// get id
	startID := lastID - limit
	if startID <= 0 {
		startID = 0
	}

	var rawMsg []string
	err := db.ZREVRANGEBYSCORE(&rawMsg, genRedisKey(ROOM_MSG_CACHE_PRE, strconv.Itoa(roomID)),
		lastID, startID,
	)
	if err != nil {
		return nil, err
	}

	messages := make([]Message, len(rawMsg))
	for i, Msg := range rawMsg {
		json.Unmarshal([]byte(Msg), &(messages[i]))
	}

	return &messages, nil
}

func getMaxMessageID(roomID int) (int64, error) {
	db := rdbPool.Get()
	defer db.Close()

	return redis.Int64(db.GET(genRedisKey(ROOM_NEXT_MSG_ID_PRE, strconv.Itoa(roomID))))
}
