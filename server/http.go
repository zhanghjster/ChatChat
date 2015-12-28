package main

import (
	"crypto/md5"
	"fmt"
	"github.com/dgrijalva/jwt-go"
	"github.com/gin-gonic/gin"
	"io"
	"net/http"
	"regexp"
	"strconv"
	"time"
)

type CurrentTab struct {
	Type string `redis:"type"`
	ID   int    `redis:"id"`
}

const (
	TIME_LAYOUT = "2006-01-02 15:04:05"
)

var JWT_SECRET = []byte("JhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9")

type HttpServer struct {
	port           int
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
		"/", "/login", "/logout", "/signup", "/chat",
	}

	for _, route := range sameHandlerMap {
		r.GET(route, func(c *gin.Context) {
			c.HTML(http.StatusOK, "app.html", nil)
		})
	}

	v1 := r.Group("/api/v1")
	{
		v1.GET("/start_chat", authCheck(), chatEndPoint)
		v1.POST("/save_current_tab", authCheck(), saveCurrentTabEndPoint)
		v1.GET("/chat_initialize", authCheck(), chatInitializeEndPoint)
		v1.GET("/lobby_initialize", authCheck(), lobbyInitializeEndPoin)
		v1.GET("/room_initialize", authCheck(), roomInitializeEndPoint)
		v1.POST("/login", loginEndpoint)
		v1.POST("/signup", signupEndPoint)
		v1.POST("/create_room", authCheck(), createRoomEndPoint)
		v1.POST("/join_room", authCheck(), joinRoomEndPoint)
	}

	r.LoadHTMLGlob("../webClient/templates/*")

	staticMap := []string{
		"css", "img", "js", "assets",
	}
	for _, path := range staticMap {
		r.Static(path, "../webClient/static/"+path)
	}

	r.Run(":3001")
}

func loginEndpoint(c *gin.Context) {

	var json = &struct {
		Username string `form:"username" json:"username" binding:"required"`
		Password string `form:"password" json:"password" binding:"required"`
	}{}

	if c.Bind(json) != nil ||
		encryp(json.Password) != getUserPassword(json.Username) {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "WRONG_PASSWORD"})
		return
	}

	userID, _ := usernameToID(json.Username)
	// JWT (JSON Web Tocken)
	c.JSON(http.StatusOK, gin.H{"TOKEN": genJwtToken(userID)})
}

func createRoomEndPoint(c *gin.Context) {
	var json = &struct {
		Name        string `form:"name" 		json:"name" 		binding:"required"`
		Description string `form:"description" json:"description"`
	}{}

	if c.Bind(json) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "WRONG_INPUT"})
		return
	}

	userID64, _ := c.Get("userID")

	roomRaw := &RoomData{
		Name:        json.Name,
		Description: json.Description,
		OwnerID:     userID64.(int),
	}

	roomID, err := saveRoomRaw(roomRaw)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"ERR": "INTERNAL_SERVER_ERR"})
		return
	}

	if peer, ok := peers.get(userID64.(int)); ok {
		peer.joinRoom(roomID)
	}

	// return roomid and name
	c.JSON(http.StatusOK, gin.H{
		"ID": roomID, "Name": json.Name,
	})
}

func joinRoomEndPoint(c *gin.Context) {
	var json = &struct {
		RoomID int `form:"roomID" json:"roomID"`
	}{}

	if c.BindJSON(json) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "NEED_ROOMID"})
		return
	}

	userID64, _ := c.Get("userID")

	roomID := json.RoomID

	fmt.Println("room id is ", roomID)

	if exists, _ := roomExist(roomID); !exists {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "ROOM_UNEXIST"})
		return
	}

	userJoinRoom(userID64.(int), roomID)

	if peer, ok := peers.get(userID64.(int)); ok {
		if suc := peer.joinRoom(roomID); !suc {
			if ok, _ := roomExist(roomID); ok {
				// another try
				peer.joinRoom(roomID)
			} else {
				c.JSON(http.StatusBadRequest, gin.H{"ERR": "ROOM_UNEXIST"})
				return
			}
		}
		peer.sayHi(roomID)
	}

	c.JSON(http.StatusOK, gin.H{
		"ID": roomID,
	})
}

func signupEndPoint(c *gin.Context) {
	var json = &struct {
		Username string `form:"username" json:"username" binding:"required"`
		Password string `form:"password" json:"password" binding:"required"`
	}{}

	if c.Bind(json) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "WRONG_INPUT"})
		return
	}

	// username exists?
	if usernameExists(json.Username) {
		c.JSON(http.StatusBadRequest, gin.H{
			"ERR": "USERNAME_EXISTS",
		})
		return
	}

	// only character and number supported
	if match, _ := regexp.MatchString(`^[a-zA-Z0-9]+$`, json.Username); !match {
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
	userID, err := createUser(json.Username, encryp(json.Password))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERR": "SERVER_ERROR",
		})
		return
	}

	// JWT (JSON Web Token)
	c.JSON(http.StatusOK, gin.H{"TOKEN": genJwtToken(userID)})
}

func genJwtToken(userID int) string {
	token := jwt.New(jwt.SigningMethodHS256)
	token.Claims["userID"] = userID
	// expire in 3 month
	token.Claims["expire_at"] = time.Now().Add(30 * 24 * time.Hour).Unix()
	tokenString, _ := token.SignedString(JWT_SECRET)
	return tokenString
}

func chatEndPoint(c *gin.Context) {
	userID64, _ := c.Get("userID")
	userID := userID64.(int)

	// get room list user in
	roomIDs, err := getUserRoomIDs(userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERROR": "INTERNAL_SERVER_ERROR",
		})
		return
	}

	ws, err := upgrader.Upgrade(c.Writer, c.Request, nil)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERROR": "INTERNAL_SERVER_ERROR",
		})
		return
	}

	username, _ := getUsername(userID)

	peer := NewPeer(ws, userID, username)

	if err := peer.setStatus(PEER_AVAILABLE); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERROR": "INTERNAL_SERVER_ERROR",
		})
		return
	}

	for _, id := range roomIDs {
		if suc := peer.joinRoom(id); !suc {
			if ok, _ := roomExist(id); ok {
				// another try
				peer.joinRoom(id)
			}
		}
		peer.sayHi(id)
	}

	go peer.read()
	peer.readMessage()

	// exit
	peer.setStatus(PEER_UNAVAILABLE)
}

func chatInitializeEndPoint(c *gin.Context) {
	userID64, _ := c.Get("userID")
	userID := userID64.(int)

	currentTab, err1 := getCurrentTab(userID)
	if err1 != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERR": "INTERNAL_SERVER_ERROR",
		})
	}

	roomList, err2 := getRoomID2NameMap(userID)
	if err2 != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERR": "INTERNAL_SERVER_ERROR",
		})
	}

	// default tab is lobby
	if currentTab.Type == "" {
		currentTab.Type = TAB_LOBBY
	}

	saveUserStatus(userID, PEER_AVAILABLE)

	c.JSON(http.StatusOK, gin.H{
		"currentTab": currentTab,
		"roomList":   roomList,
	})
}

func lobbyInitializeEndPoin(c *gin.Context) {
	roomIDs, _ := getNewRoomIDs(0, 10)

	roomList := make([]interface{}, len(roomIDs))
	for i, roomID := range roomIDs {
		raw, _ := getRoomRaw(roomID)
		username, err := getUsername(raw.OwnerID)
		if err != nil {
			continue
		}
		roomList[i] = struct {
			ID             int
			Name           string
			Description    string
			CreationTime   string
			LastUpdateTime string
			IsPrivate      bool
			Members        int
			OwnerName      string
		}{
			ID:             raw.ID,
			Name:           raw.Name,
			Description:    raw.Description,
			CreationTime:   time.Unix(raw.CreationTime, 0).Format(TIME_LAYOUT),
			LastUpdateTime: time.Unix(raw.LastUpdateTime, 0).Format(TIME_LAYOUT),
			IsPrivate:      raw.IsPrivate,
			Members:        raw.Members,
			OwnerName:      username,
		}
	}

	c.JSON(http.StatusOK, gin.H{
		"roomList": roomList,
	})
}

func roomInitializeEndPoint(c *gin.Context) {
	roomID, _ := strconv.Atoi(c.Query("roomID"))

	maxMsgID, err := getMaxMessageID(roomID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"ERR": "MAX_MSG_ID_NULL"})
		return
	}

	messages, err := getMessages(roomID, maxMsgID, 20)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"ERR": "NO_MESSAGE_FOUND"})
		return
	}

	peerID, err := getUserIdOfRoom(roomID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"ERR": "NO_PEER_FOUND"})
		return
	}

	var peers = make([]interface{}, len(peerID))

	for i, id := range peerID {
		username, _ := getUsername(id)
		status, _ := gerUserStatus(id)
		peers[i] = struct {
			ID       int    `json:"id"`
			Username string `json:"username"`
			Status   string `json:"status"`
		}{
			ID:       id,
			Username: username,
			Status:   status,
		}
	}

	fmt.Println("peers ", peers)

	c.JSON(http.StatusOK, gin.H{
		"messageList": messages,
		"memberList":  peers,
	})
}

func saveCurrentTabEndPoint(c *gin.Context) {
	var json = &struct {
		ID   int    `json:"ID"`
		Type string `json:"Type"`
	}{}

	if c.Bind(json) != nil {
		c.JSON(http.StatusBadRequest, gin.H{"ERR": "WRONG_INPUT"})
		return
	}

	userID64, _ := c.Get("userID")
	userID := userID64.(int)

	currentTab := CurrentTab{
		Type: json.Type, ID: json.ID,
	}
	_, err := saveCurrentTab(userID, currentTab)

	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"ERR": "INTERNAL_SERVER_ERROR",
		})
	} else {
		c.JSON(http.StatusOK, gin.H{"SUC": "OK"})
	}
}

func authCheck() gin.HandlerFunc {
	return func(c *gin.Context) {

		token, err := jwt.ParseFromRequest(c.Request, func(tokent *jwt.Token) (interface{}, error) {
			return JWT_SECRET, nil
		})

		if err != nil || !token.Valid {
			c.JSON(http.StatusForbidden, gin.H{"ERR": "TOKEN_INVALIDE"})
			c.Abort()
			return
		}

		expire_at := token.Claims["expire_at"].(float64)
		userID := token.Claims["userID"].(float64)

		if time.Now().Unix() > int64(expire_at) {
			c.JSON(http.StatusForbidden, gin.H{"ERR": "TOKEN_EXPIRED"})
			c.Abort()
			return
		}

		if exists, _ := userExist(int(userID)); !exists {
			c.JSON(http.StatusBadRequest, gin.H{"ERR": "USER_NOT_EXISTS"})
			c.Abort()
			return
		}

		c.Set("userID", int(userID))

		c.Next()
	}
}

func encryp(s string) string {
	h := md5.New()
	io.WriteString(h, s)
	smd5 := fmt.Sprintf("%x", h.Sum(nil))
	io.WriteString(h, smd5)
	io.WriteString(h, string(JWT_SECRET))
	return fmt.Sprintf("%x", h.Sum(nil))
}

func getCurrentTab(userID int) (*CurrentTab, error) {
	db := rdbPool.Get()
	defer db.Close()

	currentTab := &CurrentTab{}

	_, err := db.HGETALL(genRedisKey(CURRENT_TAB_PRE, strconv.Itoa(userID)), currentTab)

	if err != nil {
		return nil, err
	}

	return currentTab, nil
}

func saveCurrentTab(userID int, currentTab CurrentTab) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	key := genRedisKey(CURRENT_TAB_PRE, strconv.Itoa(userID))
	_, err := db.DEL(key)

	if err != nil {
		return false, err
	}

	err1 := db.HMSET(key,
		"type", currentTab.Type,
		"id", currentTab.ID,
	)

	if err1 != nil {
		return false, err1
	}

	return true, nil
}
