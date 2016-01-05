package main

import (
	"fmt"
	"github.com/BurntSushi/toml"
	"os"
	"path/filepath"
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

	dir := "conf"
	absDir := "."
	if _, err := os.Stat("../" + dir + "/"); err == nil {
		absDir, _ = filepath.Abs("../" + dir + "/")
	} else if _, err := os.Stat("../../" + dir + "/"); err == nil {
		absDir, _ = filepath.Abs("../../" + dir + "/")
	} else {
		absDir = binDir() + "/../" + dir
	}

	var file = absDir + "/../conf/server.cfg"
	var default_file = absDir + "/../conf/server_default.cfg"

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
