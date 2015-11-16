package main
import (
	"time"
	"log"
	"github.com/garyburd/redigo/redis"
)

type User struct {
	Username string `redis:"username"`
	Password string `redis:"password"`
	Reg_time int    `redis:"reg_time"`
	Last_activity_time int `redis:"last_activity_time"`
	Status int `redis:"status"`
}

func CreateUser(username, password string) bool {
	db := rdbPool.Get()
	defer  db.Close()

	// save user info to redis
	db.HMSET(
		gen_key(USER_CACHE_PRE, username),
		"username", username,
		"password", password,
		"reg_time", time.Now().Unix(),
	)

	return true
}

func getUserByName(username string) (bool, *User) {
	db := rdbPool.Get()
	defer  db.Close()

	user := &User{}

	log.Print(gen_key(USER_CACHE_PRE, username))

	exists, _ := db.HGETALL(gen_key(USER_CACHE_PRE, username), user);

	return exists, user
}

func usernameExists(username string) bool {
	db := rdbPool.Get()
	defer db.Close()

	exists, _ := db.EXISTS(gen_key(USER_CACHE_PRE, username));
	return exists
}

func getUserPassword(username string) string {
	db := rdbPool.Get()
	defer  db.Close()
	password, _ := redis.String(db.HGET(gen_key(USER_CACHE_PRE, username), "password"))
	return password
}