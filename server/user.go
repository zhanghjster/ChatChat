package main

import (
	"errors"
	"github.com/garyburd/redigo/redis"
	"strconv"
	"time"
)

const (
	TAB_LOBBY = "TAB_LOBBY"
	TAB_ROOM  = "TAB_ROOM"
	TAB_PEER  = "TAB_PEER"
)

type CurrentChannel struct {
	Type       string `redis:"type"`
	ID         int    `redis:"id"`
	LastMsgID  int64
	updateFlag int32
}

type User struct {
	Username         string `redis:"username"`
	Password         string `redis:"password"`
	RegTime          int    `redis:"regTime"`
	LastActivityTime int    `redis:"lastActivityTime"`
	Status           int    `redis:"status"`
}

func createUser(username, password string) (int, error) {
	db := rdbPool.Get()
	defer db.Close()

	// generate user id
	nextUserID, err := db.INCRBY(genRedisKey(USER_NEXT_ID_PRE, ""), 1)

	if err != nil {
		return 0, err
	}

	// set user name2id index
	db.SET(genRedisKey(USER_NAME2ID_PRE, username), nextUserID)

	// save user info to redis
	db.HMSET(
		genRedisKey(USER_CACHE_PRE, strconv.FormatInt(nextUserID, 10)),
		"username", username,
		"password", password,
		"regTime", time.Now().Unix(),
	)

	return int(nextUserID), nil
}

func getUserByName(username string) (bool, *User) {
	userID, _ := usernameToID(username)
	return getUserByID(userID)
}

func usernameToID(username string) (int, error) {
	db := rdbPool.Get()
	defer db.Close()

	return redis.Int(db.GET(genRedisKey(USER_NAME2ID_PRE, username)))
}

func getUserByID(userID int) (bool, *User) {
	db := rdbPool.Get()
	defer db.Close()

	user := &User{}

	db.HGETALL(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), user)
	return true, user
}

func getUsername(userID int) (string, error) {
	db := rdbPool.Get()
	defer db.Close()

	username, err := redis.String(db.HGET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "username"))
	if err != nil {
		return "", err
	}

	return username, nil
}

func gerUserStatus(userID int) (string, error) {
	db := rdbPool.Get()
	defer db.Close()

	status, err := redis.String(db.HGET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "status"))
	if err != nil {
		return "", err
	}

	return status, nil
}

func saveUserStatus(userID int, status string) error {
	db := rdbPool.Get()
	defer db.Close()

	return db.HMSET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "status", status)
}

func usernameExists(username string) bool {
	db := rdbPool.Get()
	defer db.Close()

	exists, _ := db.EXISTS(genRedisKey(USER_NAME2ID_PRE, username))
	return exists
}

func userExist(userID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	exists, err := db.EXISTS(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)))
	return exists, err
}

func getUserPassword(username string) string {
	db := rdbPool.Get()
	defer db.Close()

	// get user id by name
	userID, _ := redis.Int(db.GET(genRedisKey(USER_NAME2ID_PRE, username)))

	password, _ := redis.String(db.HGET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "password"))
	return password
}

func userInRoom(userID, roomID int) (bool, error) {
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

func userJoinRoom(userID, roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomIDStr := strconv.Itoa(roomID)

	if exists, _ := roomExist(roomID); !exists {
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

func userLeaveRoom(userID, roomID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	roomIDstr := strconv.Itoa(roomID)

	if exists, _ := roomExist(roomID); !exists {
		return false, errors.New("room not exists")
	}

	// remove room from peer's room list
	if err := db.ZREM(genRedisKey(PEER_ROOM_PRE, strconv.Itoa(userID)), roomID); err != nil {
		return false, err
	}

	// remove peer from room's peer list
	if err := db.ZREM(genRedisKey(ROOM_PEER_PRE, roomIDstr), userID); err != nil {
		return false, err
	}

	// decrease the room member
	if _, err := db.HINCRBY(genRedisKey(ROOM_CACHE_PRE, roomIDstr), "members", -1); err != nil {
		return false, err
	}

	return true, nil
}

func getUserIdOfRoom(roomID int) ([]int, error) {
	db := rdbPool.Get()
	defer db.Close()

	var peerID []int
	if err := db.ZRANGE(&peerID, genRedisKey(ROOM_PEER_PRE, strconv.Itoa(roomID)), 0, -1); err != nil {
		return nil, err
	}

	return peerID, nil
}

func getCurrentChannel(userID int) (*CurrentChannel, error) {
	db := rdbPool.Get()
	defer db.Close()

	currentChannel := &CurrentChannel{}

	_, err := db.HGETALL(genRedisKey(CURRENT_TAB_PRE, strconv.Itoa(userID)), currentChannel)

	if err != nil {
		return nil, err
	}

	return currentChannel, nil
}

func saveCurrentChannel(userID int, currentChannel *CurrentChannel) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	key := genRedisKey(CURRENT_TAB_PRE, strconv.Itoa(userID))
	_, err := db.DEL(key)

	if err != nil {
		return false, err
	}

	err1 := db.HMSET(key,
		"type", currentChannel.Type,
		"id", currentChannel.ID,
	)

	if err1 != nil {
		return false, err1
	}

	return true, nil
}

func getLastReadMsgID(userID, roomID int) (int64, error) {
	db := rdbPool.Get()
	defer db.Close()

	return redis.Int64(db.HGET(genRedisKey(LAST_READ_MSG, strconv.Itoa(roomID)), userID))
}
