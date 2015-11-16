package main

import (
	"github.com/garyburd/redigo/redis"
	"time"
	"errors"
	"log"
)

const (
	SESSION_CACHE_PRE = "session:"
	USER_CACHE_PRE = "user:"
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

func gen_key(pre, id string) string {
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
	value, err := db.conn.Do("HGET", k, f);
	if err != nil {
		return nil, errors.New("failt to get " + k + " " + f)
	}
	return value, nil


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

	log.Print(res)

	// No such entry.
	if len(res) == 0 {
		return false, nil
	}

	redis.ScanStruct(res, out)

	return true, nil
}

// Close the connection
func (db *RDB) Close() {
	db.conn.Close()
}