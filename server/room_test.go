package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
	"time"
)

func TestCurrentTab(t *testing.T) {

	cc := CurrentChannel{
		Type: TAB_LOBBY,
	}

	userID := 1

	_, err := saveCurrentChannel(userID, &cc)
	assert.Nil(t, err, "save current tab err check")

	ctab, err1 := getCurrentChannel(userID)

	assert.Nil(t, err1, "get current tab err check")

	assert.Equal(t, ctab.Type, cc.Type)
	assert.Equal(t, ctab.ID, cc.ID)

}

func TestRoomRaw(t *testing.T) {
	userID := 1

	roomRaw := &RoomData{
		Name:        "Benx's second room",
		OwnerID:     userID,
		IsPrivate:   true,
		Password:    "123123",
		Members:     0,
		Hash:        GUID(32),
		Description: "beautifull",
	}

	roomID, err := saveRoomRaw(roomRaw)

	assert.Nil(t, err, "save room err check")

	room, err1 := getRoomRaw(roomID)
	assert.Nil(t, err1, "get room err check")

	assert.Equal(t, room.Name, roomRaw.Name)
	assert.True(t, room.IsPrivate)
}

func TestPeerJoinLeaveRoom(t *testing.T) {

	userID := 1
	roomID := 1

	suc, err := userJoinRoom(userID, roomID)

	assert.Nil(t, err, "peer join room err check")
	assert.True(t, suc, "peer join room suc check")

	exists, err1 := userInRoom(userID, roomID)
	assert.Nil(t, err1, "peer in room error check")
	assert.True(t, exists, "peer in room")

	suc1, err1 := userLeaveRoom(userID, roomID)
	assert.Nil(t, err1, "peer leave room err check")
	assert.True(t, suc1, "peer leave room suc check")

	_, err3 := userInRoom(userID, roomID)
	assert.NotNil(t, err3, "peer in room error check")
}

func TestGetRoomID2NameMap(t *testing.T) {
	userID := 1

	_, err := getRoomsRawData(userID)
	assert.Nil(t, err, "err?")
}

func TestMsg(t *testing.T) {

	roomID := 1
	username := "benx"
	peerID := 1

	id, err := nextMsgID(roomID)
	assert.Nil(t, err, "next message id")
	msg := Message{
		ID:       id,
		RoomID:   roomID,
		Action:   TypeTalk,
		Username: username,
		Time:     time.Now().Format(TIME_LAYOUT),
		PeerID:   peerID,
	}

	err1 := logMessage(&msg)
	assert.Nil(t, err1, "save messsage err")

	maxMsgID, err := maxMsgIDofRoom(roomID)

	msgs, err2 := getMessages(roomID, maxMsgID, 1)
	assert.EqualValues(t, msg, msgs[0])
	assert.Nil(t, err2, "get message error")
}
