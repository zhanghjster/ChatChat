package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestConfig(t *testing.T) {

	config := LoadConfigure("../conf/server_default.cfg")

	assert.NotNil(t, config)
}
