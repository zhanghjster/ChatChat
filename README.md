<<<<<<< HEAD
# how to build
```
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
```


>在react/src下 npm install
>npm install webpack -g
>
>zhj 2015-11-16 22:06:49
>完后在react目录下  webpack —watch ，这个命令是编译react下的js保存到 webclient/statis/js/目录下 
>
>zhj 2015-11-16 22:06:58
>文件叫 webClient.js
>
>ERROR in ./config/routes.js
>Module not found: Error: Cannot resolve module 'components/Login' in /home/chylli/study/golang/src/github.com/user/ChatChat/webClient/react/src/config
> @ ./config/routes.js 36:25-52
> npm WARN install Couldn't install optional dependency: Unsupported
>
>Benx(23881302) 17:46:58 
>webclient 那里是react + react-router + redux, 用webpack打包编译
>Benx(23881302) 17:47:08 
>server那里是 go-gin
=======
ChatChat
--------

Project for my learning stuff

### Setup DEV ###


1. Setup Docker (Max OS X)

	1. Follow the instructions at http://docs.docker.com/installation/mac/
	2. Start a docker host by `Docker Quick Start Terminal`
	3. Get the IP address of your docker host  
		`docker-machine ip default`
	4. Add a line to your /etc/hosts that goes `<Docker IP> dockerhost`
	5. Run `docker-machine env devault` and copy the export statements to your ~/.bash_profile

2. Go


		cd server/
      	go install 
   
2. webClient

		cd webClient/react
		npm install
		
3. DB
		
		cd docker/
		make run
		
	
4. ? 
	
		
		
>>>>>>> 8132351d0d03d27debf1ed39abf380ed7fcdd4ec
