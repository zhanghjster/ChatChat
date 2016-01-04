package main

import (
	"fmt"
	"github.com/BurntSushi/toml"
	"os"
)

type redisConf struct {
	Url string
}

type httpConf struct {
	Port int
}

type Configure struct {
	Redis redisConf
	Http  httpConf
}

func LoadConfigure() *Configure {
	wd := binDir()
	var file = wd + "/../conf/server.cfg"
	var default_file = wd + "/../conf/server_default.cfg"

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
