package main

import (
	"fmt"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestGetMaxMessageID(t *testing.T) {

	roomID := 76

	id, err := maxMsgIDofRoom(roomID)

	assert.Nil(t, err, "get max message id ")

	fmt.Println("max message id is ", id)
}
