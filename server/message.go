package main
import (
"strconv"
"encoding/json"
"github.com/garyburd/redigo/redis"
)

const (
	TypePacket = 1
)
type Message struct {
	ID		int64  `json:"i"`
	Action  int    `json:"a"`
	PeerID  int    `json:"p"`
	Message string `json:"m"`
	RoomID  int		`json:"r"`
	Time    string  `json:"t"`
	Username string `json:"u"`
}

func nextMsgID(roomID int) (int64, error) {
	db := rdbPool.Get()
	defer db.Close()
	return db.INCRBY(genRedisKey(ROOM_NEXT_MSG_ID_PRE, strconv.Itoa(roomID)), 1)
}

func saveMessage(msg *Message) error {
	db := rdbPool.Get()
	defer db.Close()

	roomIDStr := strconv.Itoa(msg.RoomID)

	packetB, err := json.Marshal(msg)
	if err != nil {
		return  err
	}

	if _, err := db.ZADD(genRedisKey(ROOM_MSG_CACHE_PRE, roomIDStr), msg.ID, string(packetB)); err != nil {
		return err
	}

	return  nil
}

func getMessages(roomID int, lastID int64, limit int64) ([]Message, error) {
	db := rdbPool.Get()
	defer db.Close()

	// get id
	startID := lastID - limit
	if startID <= 0 {
		startID = 0
	}

	var rawPacket []string
	err := db.ZREVRANGEBYSCORE(&rawPacket, genRedisKey(ROOM_MSG_CACHE_PRE, strconv.Itoa(roomID)),
		lastID, startID,
	)
	if err != nil {
		return nil, err
	}

	messages := make([]Message, len(rawPacket))
	for i, Msg := range rawPacket {
		json.Unmarshal([]byte(Msg), &(messages[i]))
	}

	return messages, nil
}

func getMaxMessageID(roomID int) (int64, error) {
	db := rdbPool.Get()
	defer db.Close()

	key := genRedisKey(ROOM_NEXT_MSG_ID_PRE, strconv.Itoa(roomID))
	if exist, _ := db.EXISTS(key); exist {
		return redis.Int64(db.GET(key))
	}
	return 0, nil
}