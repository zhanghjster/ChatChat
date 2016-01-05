package main

import (
	"github.com/gorilla/websocket"
	"net/http"
)

func main() {
	HttpServer := NewHTTPServer(configure.Http.Port)
	HttpServer.Serve()
}

var (
	configure *Configure
	rdbPool   *RDBpool
	upgrader  websocket.Upgrader
	logger    *Log
)

func init() {

	configure = LoadConfigure()
	logger = NewLogger()
	rdbPool = NewRDBpool(configure.Redis.Url)

	upgrader = websocket.Upgrader{
		ReadBufferSize:  4096,
		WriteBufferSize: 4096,
		CheckOrigin:     func(r *http.Request) bool { return true },
	}
}
