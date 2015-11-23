ChatChat
--------

Project for my learning

### Setup DEV ###


1. Setup Docker (Max OS x)

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
	
		
		