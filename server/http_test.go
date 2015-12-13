package main

import (
	"fmt"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestEncrypt(t *testing.T) {

	password := "password"

	new_password := encryp(password)

	fmt.Println(new_password)

	assert.Equal(t, new_password, encryp(password))

}
