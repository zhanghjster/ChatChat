package main

import(
	"testing"
	"github.com/stretchr/testify/assert"
)


func TestConfig(t *testing.T) {

	config := LoadConfigure("../conf/server.cfg")

	assert.NotNil(t, config)
}
