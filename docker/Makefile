.PHONY: build dev stop run dbdata clear_container

dbdata:

	@echo prepare redisdata volume
	@if [ $(shell docker ps -a | grep -ci redisdata) -eq 0 ]; then \
		docker create -v /data --name redisdata centos /bin/true; \
	fi

run: dbdata

	@echo start containers
	@if [ $(shell docker ps | grep -ci redis) -eq 0 ]; then \
		cd dev && docker-compose up -d ; \
	fi

stop: dbdata

	@echo stop containers
	cd dev && docker-compose stop

dev: run

	docker exec -it happy_dev bash

clear_container:

	docker ps -a | grep Exit | cut -d ' ' -f 1 | xargs  docker rm

clear_images:

	docker rmi -f $$(docker images -a | grep "<none>" | awk "{print \$3"})

