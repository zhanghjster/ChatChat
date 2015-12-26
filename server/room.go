package main

import (
	"github.com/garyburd/redigo/redis"
	"strconv"
	"time"
	"sync"
)

const (
	TAB_LOBBY = "TAB_LOBBY"
	TAB_ROOM  = "TAB_ROOM"
	TAB_PEER  = "TAB_PEER"
)

type RoomData struct {
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
	sync.RWMutex
	ID    int
	hash  string
	peers map[*Peer]bool

	broadcastChan chan []byte
	registerChan  chan *Peer
	unregisterChan chan *Peer
	exitChan		chan int
	time int
}

type Rooms struct {
	sync.RWMutex
	rooms map[int]*Room
}

func (rm *Rooms) get(id int) (*Room, bool) {
	room, ok := rm.rooms[id]
	return room, ok
}

// not concurrency safe
func (rm *Rooms) set(id int, room *Room) {
	rm.rooms[id] = room
}

func (rm *Rooms) del(id int) {
	rm.Lock()
	defer rm.Unlock()
	delete(rm.rooms, id)
}

var rooms = &Rooms{
	rooms: make(map[int]*Room),
}

// not concurrency safe
func NewRoom(roomID int) *Room {
	room := &Room{
		ID: roomID,

		broadcastChan:  make(chan []byte),
		registerChan: make(chan *Peer),
		peers: make(map[*Peer]bool),

		exitChan: make(chan int),

		time: int(time.Now().Unix()),
	}

	go room.run()

	rooms.set(roomID, room)
	return room
}

func (r *Room) addPeer(peer *Peer)  {
	r.Lock()
	r.peers[peer] = true
	r.Unlock()
}

func (r *Room) run() {

	for {
		select {
		case peer := <- r.registerChan:
			r.peers[peer] = true;
			continue

		case peer := <- r.unregisterChan:
			delete(r.peers, peer)
			continue

		case message := <-r.broadcastChan:
			for peer := range r.peers {
				select{
				case peer.sendChan <- message:
				case <- peer.exitChan:
				}
			}
			continue
		case <- r.exitChan:
			rooms.del(r.ID)
			for peer := range r.peers {
				select {
				case peer.roomExitChan <- r:
				case <- peer.exitChan:
				}
			}
			goto exit
		}
	}

	exit:
}

func (r *Room) broadcastPacket(message []byte) {
	r.broadcastChan <- message
}

func getRoomID2NameMap(userID int) (*[]interface{}, error) {
	db := rdbPool.Get()
	defer db.Close()

	// get user's room id
	roomID, err := getUserRoomIDs(userID)
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

func getUserRoomIDs(userID int) ([]int, error) {
	db := rdbPool.Get()
	defer db.Close()

	var roomID []int
	err := db.ZREVRANGE(&roomID, genRedisKey(PEER_ROOM_PRE, strconv.Itoa(userID)), 0, -1)
	if err != nil {
		return nil, err
	}

	return roomID, nil
}

func saveRoomRaw(roomRaw *RoomData) (int, error) {
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
	if _, err := userJoinRoom(roomRaw.OwnerID, roomID); err != nil {
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

func getRoomRaw(roomID int) (*RoomData, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomRaw := &RoomData{}
	db.HGETALL(genRedisKey(ROOM_CACHE_PRE, strconv.Itoa(roomID)), roomRaw)
	return roomRaw, nil
}



func roomExist(roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()
	return db.EXISTS(genRedisKey(ROOM_CACHE_PRE, strconv.Itoa(roomID)))
}


