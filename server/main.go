package main
import (
	"github.com/gorilla/websocket"
	"net/http"
)
abc
func main() {
	HttpServer := NewHTTPServer(3000)
	HttpServer.Serve();
}

var (
	rdbPool *RDBpool
	sessionManager *SessionManager
	upgrader websocket.Upgrader
)

func init() {
	rdbPool = NewRDBpool("dockerhost:6379")
	sessionManager, _ = NewSessionManager("chatchat", 100000)

	upgrader = websocket.Upgrader{
		ReadBufferSize: 4096,
		WriteBufferSize: 4096,
		CheckOrigin: func(r *http.Request) bool { return true },
	}
}
