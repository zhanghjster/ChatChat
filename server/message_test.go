package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestGetMaxMessageID(t *testing.T) {

	roomID := 7600000000

	_, err := maxMsgIDofRoom(roomID)

	assert.Nil(t, err, "get max message id ")

}
