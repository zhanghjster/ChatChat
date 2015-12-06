package main

import (
	"github.com/garyburd/redigo/redis"
	"time"
	"errors"
)

const (
	SESSION_CACHE_PRE = "CCs:"
	USER_CACHE_PRE = "CCu:"
	USER_NAME2ID_PRE = "CCun2i:"
	USER_NEXT_ID_PRE = "CCnext_user_id"
	CURRENT_TAB_PRE  = "CCct:"
	ROOM_NEXT_ID_PRE = "CCnext_room_id"
	ROOM_CACHE_PRE = "CCr:"
	PEER_ROOM_PRE = "CCPR:"
	ROOM_PEER_PRE = "CCRP:"
	ROOM_ID_INDEX_PRE = "CCRI"
	ROOM_NEXT_MSG_ID_PRE = "CCrnmi:"
	ROOM_MSG_CACHE_PRE = "CCrmc:"
)

type RDBpool struct {
	pool redis.Pool
}

type RDB struct {
	conn redis.Conn
}

// Redis DB Pool
func NewRDBpool(address string) *RDBpool {
	pool := redis.Pool{
		MaxActive: 0,
		MaxIdle: 3,
		Dial: func() (redis.Conn, error) {
			c, err := redis.DialTimeout(
				"tcp",
				address,
				time.Duration(5)*time.Second,
				time.Duration(5)*time.Second,
				time.Duration(5)*time.Second,
			)
			if err != nil {
				return nil, err
			}

			return c, err
		},
	}
	return &RDBpool{pool: pool}
}

func genRedisKey(pre, id string) string {
	if id == "" {
		return pre
	}
	return pre + id
}

// Get connection from pool.
// The connection must be closed
func (p *RDBpool) Get() *RDB {
	return &RDB{conn: p.pool.Get()}
}

// Close the pool
func (p *RDBpool) Close() {
	p.pool.Close()
}

// INCRBY
func (db *RDB) INCRBY(k string, i int) (int64, error) {
	n, err := db.conn.Do("INCRBY", k, i)
	return n.(int64), err
}

// DEL key
func (db *RDB) DEL(keys ...interface{}) (int, error) {
	n , err := redis.Int(db.conn.Do("DEL", keys...))
	return n, err
}

// SET key value
func (db *RDB) SET(k, v interface{}) error {
	_, err := db.conn.Do("SET", k, v)
	return err
}

// GET key
func (db *RDB) GET(k string) (interface{}, error) {

	value, err := db.conn.Do("GET", k)
	if err != nil {
		return nil, errors.New("fail to get " + k)
	}

	return value, nil;
}

// HGET key filed
func (db *RDB) HGET(k, f string) (interface{}, error) {
	return db.conn.Do("HGET", k, f);

}

// ZADD key s1 m1 s2 m2 ....
func (db *RDB) ZADD(args ...interface{}) (int, error) {
	r, err := redis.Int(db.conn.Do("ZADD", args...))
	return r, err
}

// ZREM m1 m2 ...
func (db *RDB) ZREM(args ...interface{}) error {
	_, err := db.conn.Do("ZREM", args...)
	return err
}

// ZRANGE k offset limit
func (db *RDB) ZRANGE(out interface{}, args ...interface{}) error {
	values, err := redis.Values(db.conn.Do("ZRANGE", args...));
	redis.ScanSlice(values, out)
	return err
}

// ZREVRANGE k offset limit
func (db *RDB) ZREVRANGE(out interface{}, args ...interface{}) error {
	values, err := redis.Values(db.conn.Do("ZREVRANGE", args...));
	redis.ScanSlice(values, out)
	return err
}

// ZREVRANGEBYSCORE k offset limit
func (db *RDB) ZREVRANGEBYSCORE(out interface{}, args ...interface{}) error {
	values, err := redis.Values(db.conn.Do("ZREVRANGEBYSCORE", args...));
	redis.ScanSlice(values, out)
	return err
}

// ZRANK k
func (db *RDB) ZRANK(k string, m interface{}) (int, error) {
	r, err := redis.Int(db.conn.Do("ZRANK", k, m));

	if err != nil {
		return 0, err
	}

	return r, nil
}

//EXPIRE k timeInSeconds
func (db *RDB) EXPIRE(k string, expire int) error {
	_, err := db.conn.Do("EXPIRE", k, expire)
	return  err
}

// EXISTS key
func (db *RDB) EXISTS(k string) (bool, error) {
	exists, err := redis.Bool(db.conn.Do("EXISTS", k))

	if err != nil {
		return false, err
	}

	return exists, nil
}

// HMSET key k1 v1 k2 v2 ...
func (db *RDB) HMSET(args ...interface{}) error {
	_, err := db.conn.Do("HMSET", args...)
	return err
}

// HGETALL key
func (db *RDB) HGETALL(key string, out interface{}) (bool, error) {
	res, err := redis.Values(db.conn.Do("HGETALL", key))

	if err != nil {
		return false, errors.New("Failed to load from DB")
	}

	// No such entry.
	if len(res) == 0 {
		return false, nil
	}

	redis.ScanStruct(res, out)

	return true, nil
}

// HINCRBY key field increment
func (db *RDB) HINCRBY(args ...interface{}) (int, error) {
	res, err := redis.Int(db.conn.Do("HINCRBY", args...))
	return res, err
}

// Close the connection
func (db *RDB) Close() {
	db.conn.Close()
}