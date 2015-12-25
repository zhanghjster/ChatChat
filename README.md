=======
ChatChat
--------

[![Build Status](https://api.travis-ci.org/zhanghjster/ChatChat.svg)](https://travis-ci.org/zhanghjster/ChatChat)

Project for my learning stuff

### Setup DEV ###


1. Setup Docker (Max OS X)

	1. Follow the instructions at http://docs.docker.com/installation/mac/
	2. Start a docker host by `Docker Quick Start Terminal`
	3. Get the IP address of your docker host  
		`docker-machine ip default`
	4. Add a line to your /etc/hosts that goes `<Docker IP> dockerhost`
	5. Run `docker-machine env default` and copy the export statements to your ~/.bash_profile

2. Go


		cd server/
      	go install 
   
3. webClient

		cd webClient/react
		npm install
		
4. DB
		
		cd docker/
		make run
		
	


5. CY Note:


		export GOPATH=~/go #设置GOPATH为合适的值
		go get github.com/gorilla/websocket
		go get github.com/garyburd/redigo/redis
		go get github.com/dgrijalva/jwt-go
		go get github.com/gin-gonic/gin
		git clone https://github.com/golang/net $GOPATH/src/golang.org/x/net
		go get github.com/zhanghjster/ChatChat
		cd server
		go build
		./server
		
		在react/src下 npm install


		
		

