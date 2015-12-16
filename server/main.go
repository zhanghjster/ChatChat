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
	configure      *Configure
	rdbPool        *RDBpool
	sessionManager *SessionManager
	upgrader       websocket.Upgrader
)

func init() {

	configure = LoadConfigure()

	rdbPool = NewRDBpool(configure.Redis.Host)
	sessionManager, _ = NewSessionManager("chatchat", 100000)

	upgrader = websocket.Upgrader{
		ReadBufferSize:  4096,
		WriteBufferSize: 4096,
		CheckOrigin:     func(r *http.Request) bool { return true },
	}
}
