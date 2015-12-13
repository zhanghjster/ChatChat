package main

import (
	"fmt"
	"github.com/BurntSushi/toml"
	"os"
)

type redisConf struct {
	Host string
}

type httpConf struct {
	Port int
}

type Configure struct {
	Redis redisConf
	Http  httpConf
}

func LoadConfigure() *Configure {

	var file = "../conf/server.cfg"
	var default_file = "../conf/server_default.cfg"

	if _, err := os.Stat(file); err != nil {
		file = default_file
	}

	var config = Configure{}

	if _, err := toml.DecodeFile(file, &config); err != nil {
		panic(err)
	}

	fmt.Print(config)

	return &config
}