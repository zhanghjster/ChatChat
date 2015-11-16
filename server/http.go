package main
import (
	"net/http"
	"log"
	"github.com/gin-gonic/gin"
	"strings"
	"time"
	"regexp"
)

type HttpServer struct {
	port int
	sessionManager *SessionManager
}

func NewHTTPServer(port int) *HttpServer {

	return &HttpServer{
		port: port,
	}
}

func (s *HttpServer) Serve() {
	r := gin.Default()

	r.LoadHTMLGlob("../webClient/templates/*")

	r.GET("/",authCheck(), func(c *gin.Context) {
		c.HTML(http.StatusOK, "app.html", nil)
	})

	r.GET("/login",authCheck(), func(c *gin.Context) {
		c.HTML(http.StatusOK, "app.html", nil)
	})

	r.GET("/signup",authCheck(), func(c *gin.Context) {
		c.HTML(http.StatusOK, "app.html", nil)
	})

	r.GET("/chat",authCheck(), func(c *gin.Context) {
		c.HTML(http.StatusOK, "app.html", nil)
	})

	r.GET("/chatroom", authCheck(), func (c *gin.Context) {
		c.HTML(http.StatusOK, "chatroom.html", nil)
	})

	r.GET("/api/v1/chat", chatEndPoint)

	v1 := r.Group("/v1")
	{
		v1.POST("/login", loginEndpoint)
		v1.POST("/signup", signupEndPoint)
		v1.POST("/create_room", authCheck(), createRoomEndPoint)
		v1.GET("/join_room", authCheck(), joinRoomEndPoint)
		v1.GET("/websocket", websocketUpgradeEndPoint)
		v1.GET("/logout", authCheck(), logoutEndPoint)
	}

	r.Static("css", "../webClient/static/css")
	r.Static("img", "../webClient/static/img")
	r.Static("js", "../webClient/static/js")
	r.Static("assets", "../webClient/static/assets")

	r.Run(":3001")
}

func chatEndPoint(c *gin.Context) {
	roomID := c.Query("roomID")
	peerID := c.Query("peerID")

	// create the room if not yet
	room, exists := rooms[roomID]
	if !exists {
		room = NewRoom(roomID)
	}

	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERROR": "INTERNAL_SERVER_ERROR",
		})
		return
	}

	peer := &Peer{
		sendChan: make(chan []byte),
		ws : ws,
		ID : peerID,
		roomID: room.ID,
	}

	room.registerChan <- peer

	go peer.read()
	peer.talk()
}

func websocketUpgradeEndPoint(c *gin.Context) {
	roomID := c.Query("roomID")

	room := rooms[roomID]
	if room == nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERROR" : "ROOM_AVALIABLE",
		})
	}

	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERROR": "INTERNAL_SERVER_ERROR",
		})
		return
	}

	peer := &Peer{
		sendChan: make(chan []byte),
		ws : ws,
		ID : GUID(16),
		roomID: room.ID,
	}

	room.registerChan <- peer

	go peer.read()
	peer.talk()
}

func joinRoomEndPoint(c *gin.Context) {
	roomID := c.Query("roomID")

	room := rooms[roomID]
	if room == nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERROR" : "ROOM_AVALIABLE",
		})
	}

	log.Println("Join ROOM: " + room.ID)

	// upgrade websocket
}

func createRoomEndPoint(c *gin.Context) {
	roomName := c.PostForm("roomname")

	if (roomName == "") {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERROR" : "ROOMNAME_UNAVALIABLE",
		})
	}

	log.Println("Room: " + roomName)

	// Create room
	room := NewRoom(GUID(12))

	c.JSON(http.StatusOK, gin.H{
		"ROOM_URL" : "localhost:8080/v1/websocket?roomID=" + room.ID,
	})
}

func authCheck() gin.HandlerFunc {
	return func(c *gin.Context) {
		r := c.Request

		// Get sessionid from cookie
		cookie, _ := r.Cookie(sessionManager.sessionName);
		var session *Session
		var sid, username string

		if (cookie != nil) {
			s := strings.Split(cookie.Value, "-")
			sid, username = s[0], s[1]

			session = sessionManager.ReadSession(username)
			log.Println("sid " + sid)
			log.Println("session sid " + session.sid)
			if session != nil && session.sid == sid {
				c.Set("session", session)
			}
		}

		c.Next()
	}
}

func _unauth(c *gin.Context) {
	c.JSON(http.StatusForbidden, gin.H{
		"ERROR" : " Unauthenticated",
	})
}

func logoutEndPoint(c *gin.Context) {

	// get the session from cookie
	if session, exists := c.Get("session"); exists {
		sessionManager.DeleteSession(session.(*Session))
	}

	// set the cookie expire
	cookie := http.Cookie{
		Name: sessionManager.sessionName,
		Expires: time.Now(),
	}
	http.SetCookie(c.Writer, &cookie)

	c.Redirect(http.StatusMovedPermanently, "/")
}

func signupEndPoint(c *gin.Context) {
	username := c.PostForm("username")
	password := c.PostForm("password")

	log.Println("username: " + username)
	log.Println("password: " + password)


	// username check
	if usernameExists(username) {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERROR"  : "USERNAME_EXISTS",
		})
		return
	}

	// only character and number supported
	if match, _:= regexp.MatchString(`^[a-zA-Z0-9]+$`, username); !match {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERROR": "INVALIDE_USERNAME",
		})
		return
	}

	// password check
	if len(password) < 5 {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERROR"  : "PASSWORD_TOO_SIMPLE",
		})
		return
	}

	if suc := CreateUser(username, password); suc {
		// start the session
		sessionManager.StartSession(c.Writer, username)

	} else {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERROR": "SERVER_ERROR",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{"SUC": "OK"})
}

func loginEndpoint(c *gin.Context) {
	// check username and password
	username := c.PostForm("username")
	password := c.PostForm("password")

	log.Println("username: " + username)
	log.Println("password: " + password)

	// TODO: encrypt the password

	if password != getUserPassword(username) {
		c.JSON(http.StatusBadRequest, gin.H{"ERROR": "WRONG_PASSWORD"})
		return
	}

	session := sessionManager.StartSession(c.Writer, username)

	log.Println("Create session " + session.sid + " for " + username)

	c.JSON(http.StatusOK, gin.H{"SUC": "OK"})
}

