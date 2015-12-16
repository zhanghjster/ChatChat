package main

import (
	"github.com/stretchr/testify/assert"
	"testing"
	"github.com/garyburd/redigo/redis"
)

func TestRDBconnection(t *testing.T) {
	db := rdbPool.Get()
	defer db.Close()

	assert.Nil(t, db.conn.Err())

}

func TestHMSETandHGETALL(t *testing.T) {

	assert := assert.New(t)

	db := rdbPool.Get()
	defer db.Close()

	err := db.HMSET("st", "age", 40, "name", "Benx")

	assert.Nil(err)

	reply := struct {
		Age  int    `redis:"age"`
		Name string `redis:"name"`
	}{}

	exists, err := db.HGETALL("st", &reply)

	assert.Nil(err)
	assert.True(exists)
	assert.Equal(40, reply.Age)
	assert.Equal("Benx", reply.Name)

	_ = db.HMSET("st1", "name", "benx")
	n, err := db.DEL("st", "st1")
	assert.Nil(err)
	assert.Equal(2, n)
}

func TestSETandGET(t *testing.T) {
	db := rdbPool.Get()
	defer db.Close()

	db.SET("benben", 1)

	value, _ := redis.Int(db.GET("benben"))
	assert.Equal(t, 1, value, "get  check")

	db.EXPIRE("benben", 1000000)

	db.DEL("benben")

}

func TestINCRYBY(t *testing.T) {
	db := rdbPool.Get()
	defer db.Close()

	_, err := db.INCRBY("test_next_id", 1)

	assert.Nil(t, err)

}
