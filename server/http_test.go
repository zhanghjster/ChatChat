package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestEncrypt(t *testing.T) {

	password := "password"

	new_password := encryp(password)

	assert.Equal(t, new_password, encryp(password))

}
