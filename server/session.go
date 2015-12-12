package main

import (
	"github.com/garyburd/redigo/redis"
	"log"
	"net/http"
	"net/url"
)

type SessionManager struct {
	dbpool      *RDBpool
	sessionName string
	maxlifetime int
}

func NewSessionManager(sname string, ml int) (*SessionManager, error) {
	return &SessionManager{
		sessionName: sname,
		maxlifetime: ml,
		dbpool:      rdbPool,
	}, nil
}

func (sm *SessionManager) SaveToCache(session *Session) {
	db := sm.dbpool.Get()
	defer db.Close()

	key := SESSION_CACHE_PRE + session.username
	db.SET(key, session.sid)

	if session.lifetime > 0 {
		db.EXPIRE(key, session.lifetime)
	}

	return
}

func (sm *SessionManager) DeleteSession(session *Session) {
	db := sm.dbpool.Get()
	defer db.Close()

	key := SESSION_CACHE_PRE + session.username
	db.DEL(key)
}

func (sm *SessionManager) InitSession(sid, username string) *Session {
	log.Println("username " + username)
	return &Session{
		sid:      sid,
		username: username,
	}
}

func (sm *SessionManager) StartSession(w http.ResponseWriter, username string) *Session {
	sid := sm.NewSessionID()
	session := sessionManager.InitSession(sid, username)

	cookie := http.Cookie{
		Name:     sessionManager.sessionName,
		Value:    url.QueryEscape(sid + "-" + username),
		Path:     "/",
		HttpOnly: true,
	}

	http.SetCookie(w, &cookie)

	// save session to cache
	sm.SaveToCache(session)

	return session
}

func (sm *SessionManager) ReadSession(username string) *Session {
	db := sm.dbpool.Get()
	defer db.Close()

	sid, _ := redis.String(db.GET(SESSION_CACHE_PRE + username))

	if username != "" {
		return &Session{
			sid:      sid,
			username: username,
		}
	}

	return nil
}

func (sm *SessionManager) NewSessionID() string {
	return GUID(32)
}

type Session struct {
	sid        string
	username   string
	createTime int
	lifetime   int
}
