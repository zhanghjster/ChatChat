package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestGetLastReadMsgID(t *testing.T) {
	userID := 5
	roomID := 76
	_, err := getLastReadMsgID(userID, roomID)

	assert.Nil(t, err, "get last read message id")
}
