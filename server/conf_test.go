package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestConfig(t *testing.T) {

	config := LoadConfigure()

	assert.NotNil(t, config)
}
