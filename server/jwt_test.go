package main

import (
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"testing"
	"github.com/stretchr/testify/assert"
)

func TestCreateToken(t *testing.T) {

	assert := assert.New(t)

	var username string = "benx"

	secret  := []byte("mimamima")

	// sign
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims["username"] = username

	tokenString , err := token.SignedString(secret)

	assert.Nil(err)
	fmt.Println("Token:", tokenString)

	// parse and verify
	token, err  = jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
		return secret, nil
	})

	assert.True(err == nil && token.Valid);

	fmt.Println("username:" , token.Claims["username"].(string))
	assert.Equal(username, token.Claims["username"].(string))
}
