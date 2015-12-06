package main
import (
	"time"
	"github.com/garyburd/redigo/redis"
	"strconv"
)

type User struct {
	Username string `redis:"username"`
	Password string `redis:"password"`
	RegTime int    `redis:"regTime"`
	LastActivityTime int `redis:"lastActivityTime"`
	Status int `redis:"status"`
}

func createUser(username, password string) (int, error) {
	db := rdbPool.Get()
	defer  db.Close()

	// generate user id
	nextUserID, err := db.INCRBY(genRedisKey(USER_NEXT_ID_PRE, ""), 1)

	if err != nil {
		return 0, err
	}

	// set user name2id index
	db.SET(genRedisKey(USER_NAME2ID_PRE, username), nextUserID)

	// save user info to redis
	db.HMSET(
		genRedisKey(USER_CACHE_PRE, strconv.FormatInt(nextUserID, 10)),
		"username", username,
		"password", password,
		"regTime", time.Now().Unix(),
	)

	return int(nextUserID), nil
}

func getUserByName(username string) (bool, *User) {
	userID, _ := usernameToID(username);
	return getUserByID(userID)
}

func usernameToID(username string) (int, error) {
	db := rdbPool.Get()
	defer  db.Close()

	return redis.Int(db.GET(genRedisKey(USER_NAME2ID_PRE, username)));
}

func getUserByID(userID int) (bool, *User) {
	db := rdbPool.Get()
	defer  db.Close()

	user := &User{}

	db.HGETALL(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), user)
	return true, user
}

func getUsername(userID int) (string, error)  {
	db := rdbPool.Get()
	defer  db.Close()

	username, err := redis.String(db.HGET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "username"))
	if err != nil {
		return "", err
	}

	return username, nil
}

func gerUserStatus(userID int) (string, error)  {
	db := rdbPool.Get()
	defer  db.Close()

	status, err := redis.String(db.HGET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "status"))
	if err != nil {
		return "", err
	}

	return status, nil
}

func setUserStatus(userID int, status string) error {
	db := rdbPool.Get()
	defer  db.Close()

	return db.HMSET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "status", status)
}

func usernameExists(username string) bool {
	db := rdbPool.Get()
	defer db.Close()

	exists, _ := db.EXISTS(genRedisKey(USER_NAME2ID_PRE, username));
	return exists
}

func userExist(userID int) (bool, error) {
	db := rdbPool.Get()
	defer db.Close()

	exists, err := db.EXISTS(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)));
	return exists, err
}

func getUserPassword(username string) string {
	db := rdbPool.Get()
	defer  db.Close()

	// get user id by name
	userID, _ := redis.Int(db.GET(genRedisKey(USER_NAME2ID_PRE, username)));

	password, _ := redis.String(db.HGET(genRedisKey(USER_CACHE_PRE, strconv.Itoa(userID)), "password"))
	return password
}