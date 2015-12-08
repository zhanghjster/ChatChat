package main

import (
	"fmt"
	"github.com/BurntSushi/toml"
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
	var config = Configure{}

	if _, err := toml.DecodeFile(file, &config); err != nil {
		panic(err)
	}

	fmt.Print(config)

	return &config
}
