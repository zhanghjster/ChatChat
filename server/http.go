package main
import (
	"net/http"
	"log"
	"github.com/gin-gonic/gin"
	"time"
	"regexp"
	"github.com/dgrijalva/jwt-go"
	"crypto/md5"
	"io"
	"fmt"
)

var JWT_SECRET = []byte("JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")

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

	sameHandlerMap := []string{
		"/", "/login","/signup","/chat",
	}

	for _, route := range sameHandlerMap {
		r.GET(route, func(c *gin.Context) {
			c.HTML(http.StatusOK, "app.html", nil)
		})
	}

	v1 := r.Group("/api/v1")
	{
		v1.GET("/chat", chatEndPoint)
		v1.POST("/login", loginEndpoint)
		v1.GET("/login", loginEndpoint)
		v1.POST("/signup", signupEndPoint)
		v1.POST("/create_room", authCheck(), createRoomEndPoint)
		v1.GET("/join_room", authCheck(), joinRoomEndPoint)
		v1.GET("/logout", authCheck(), logoutEndPoint)
	}

	r.LoadHTMLGlob("../webClient/templates/*")

	staticMap := []string{
		"css","img","js", "assets",
	}
	for _, path := range staticMap {
		r.Static(path, "../webClient/static/" + path)
	}

	r.Run(":3001")
}

func loginEndpoint(c *gin.Context) {

	var json = &struct{
		Username string `form:"username" json:"username" binding:"required"`
		Password string `form:"password" json:"password" binding:"required"`
	}{}

	if c.BindJSON(json) != nil ||
		encryp(json.Password) != getUserPassword(json.Username) {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "WRONG_PASSWORD"})
		return
	}

	// JWT (JSON Web Tocken)
	c.JSON(http.StatusOK, gin.H{"TOKEN": genJwtToken(json.Username)})
}

func signupEndPoint(c *gin.Context) {
	var json = &struct{
		Username string `form:"username" json:"username" binding:"required"`
		Password string `form:"password" json:"password" binding:"required"`
	}{}

	if c.BindJSON(json) != nil  {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "WRONG_INPUT"})
		return
	}

	// username check
	if usernameExists(json.Username) {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERR"  : "USERNAME_EXISTS",
		})
		return
	}

	// only character and number supported
	if match, _:= regexp.MatchString(`^[a-zA-Z0-9]+$`, json.Username); !match {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERR": "INVALIDE_USERNAME",
		})
		return
	}

	// password check
	if len(json.Password) < 5 {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERR": "PASSWORD_TOO_SIMPLE",
		})
		return
	}

	// create user
	if suc, _ := CreateUser(json.Username, encryp(json.Password)); !suc {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERR": "SERVER_ERROR",
		})
		return
	}

	// JWT (JSON Web Token)
	c.JSON(http.StatusOK, gin.H{"TOKEN": genJwtToken(json.Username)})
}

func genJwtToken(username string) string {
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims["username"] = username;
	// expire at 3 month later
	token.Claims["expire_at"] = time.Now().Add(30*24*time.Hour).Unix()
	tokenString, _ := token.SignedString(JWT_SECRET)
	return tokenString
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

		token, err := jwt.ParseFromRequest(c.Request, func(tokent *jwt.Token) (interface{}, error) {
			return JWT_SECRET, nil
		});

		if err != nil || !token.Valid {
			c.JSON(http.StatusForbidden, gin.H{"ERR": "TOKEN_INVALIDE"})
			c.Abort()
			return
		}

		expire_at := token.Claims["expire_at"].(float64)
		username  := token.Claims["username"].(string)

		if time.Now().Unix() > int64(expire_at)  {
			c.JSON(http.StatusForbidden, gin.H{"ERR": "TOKEN_EXPIRED"})
			c.Abort()
			return
		}

		session := sessionManager.ReadSession(username)
		log.Println("session sid " + session.sid)

		c.Set("session", session)

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

func encryp(s string) string {
	h := md5.New()
	io.WriteString(h, s)
	smd5 := fmt.Sprintf("%x", h.Sum(nil))
	io.WriteString(h, smd5)
	io.WriteString(h, string(JWT_SECRET))
	return fmt.Sprintf("%x", h.Sum(nil))
}

