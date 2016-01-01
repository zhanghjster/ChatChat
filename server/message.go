package main

import (
	"encoding/json"
	"strconv"
)

const (
	TypeTalk         = 1
	TypeStatusUpdate = 2
	TypePeerJoin     = 3
	TypePeerLeave    = 4
)

type Message struct {
	ID       int64  `json:"i"`
	Action   int    `json:"a"`
	PeerID   int    `json:"p"`
	Content  string `json:"c"`
	RoomID   int    `json:"r"`
	Time     string `json:"t"`
	Username string `json:"u"`
}

func nextMsgID(roomID int) (int64, error) {
	db := rdbPool.Get()
	defer db.Close()
	return db.INCRBY(genRedisKey(ROOM_NEXT_MSG_ID_PRE, strconv.Itoa(roomID)), 1)
}

func logMessage(msg *Message) error {
	db := rdbPool.Get()
	defer db.Close()

	roomIDStr := strconv.Itoa(msg.RoomID)

	packetB, err := json.Marshal(msg)
	if err != nil {
		return err
	}

	if _, err := db.ZADD(genRedisKey(ROOM_MSG_CACHE_PRE, roomIDStr), msg.ID, string(packetB)); err != nil {
		return err
	}

	return nil
}

func getMessages(roomID int, lastID int64, limit int64) ([]Message, error) {
	db := rdbPool.Get()
	defer db.Close()

	// get id
	startID := lastID - limit
	if startID <= 0 {
		startID = 0
	} else {
		startID = startID + 1
	}

	var rawPacket []string
	err := db.ZRANGEBYSCORE(&rawPacket, genRedisKey(ROOM_MSG_CACHE_PRE, strconv.Itoa(roomID)),
		startID, lastID,
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

func maxMsgIDofRoom(roomID int) (int64, error) {
	db := rdbPool.Get()
	defer db.Close()

	key := genRedisKey(ROOM_MSG_CACHE_PRE, strconv.Itoa(roomID))
	var res []string
	err := db.ZREVRANGEBYSCORE(&res, key, "+inf", 0, "withscores", "limit", 0, 1)
	if err != nil {
		return 0, err
	}
	id, err := strconv.ParseInt(res[1], 10, 64)
	if err != nil {
		return 0, err
	}
	return id, nil
}
