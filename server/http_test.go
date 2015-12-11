package main

import (
	"fmt"
	"github.com/stretchr/testify/assert"
	"testing"
	"time"
)

func TestEncrypt(t *testing.T) {

	password := "password"

	new_password := encryp(password)

	fmt.Println(new_password)

	assert.Equal(t, new_password, encryp(password))

	ti := time.Now().Add(time.Hour * 3).Unix()

	fmt.Println(ti)

}
