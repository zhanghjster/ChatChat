package main

import (
	"fmt"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestCurrentTab(t *testing.T) {

	currentTab := CurrentTab{
		Type: TAB_LOBBY,
	}

	userID := 1

	_, err := saveCurrentTab(userID, currentTab)
	assert.Nil(t, err, "save current tab err check")

	ctab, err1 := getCurrentTab(userID)

	assert.Nil(t, err1, "get current tab err check")

	assert.Equal(t, ctab.Type, currentTab.Type)
	assert.Equal(t, ctab.ID, currentTab.ID)

}

func TestRoomRaw(t *testing.T) {
	userID := 1

	roomRaw := &RoomRaw{
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

	roomIDs, _ := getNewRoomIDs(0, 10)

	fmt.Print(roomIDs)
}

func TestPeerJoinLeaveRoom(t *testing.T) {

	userID := 1
	roomID := 1

	suc, err := peerJoinRoom(userID, roomID)

	assert.Nil(t, err, "peer join room err check")
	assert.True(t, suc, "peer join room suc check")

	exists, err1 := peerInRoom(userID, roomID)
	assert.Nil(t, err1, "peer in room error check")
	assert.True(t, exists, "peer in room")

	/*
		suc1, err1 := PeerLeaveRoom(userID, roomID)
		assert.Nil(t, err1, "peer leave room err check")
		assert.True(t, suc1, "peer leave room suc check")

		_, err3 := PeerInRoom(userID, roomID)
		assert.NotNil(t, err3, "peer in room error check")
	*/
}

func TestGetRoomID2NameMap(t *testing.T) {
	userID := 1

	mp, err := getRoomID2NameMap(userID)
	assert.Nil(t, err, "err?")
	fmt.Println(mp)
}

func TestMsg(t *testing.T) {

	roomID := 1
	username := "benx"

	_, err := saveMessage(username, roomID, "how are you????")
	assert.Nil(t, err, "save messsage err")

	messages, err := getMessages(roomID, 10, 10)
	assert.Nil(t, err, "get message error")
	fmt.Print(messages)
}

func TestUserStatus(t *testing.T) {

	userID := 1
	status := PEER_BUSY

	err := setUserStatus(userID, status)
	assert.Nil(t, err, "set user status err")

	status1, err1 := gerUserStatus(userID)
	assert.Nil(t, err1, "get user status err")
	assert.EqualValues(t, status, status1)
}
