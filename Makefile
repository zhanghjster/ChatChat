.PHONY: build dev clean test dbdata exp

GOFLAGS ?= $(GOFLAGS:)
BUILD_ROOT=build
BUILD_DIR=$(BUILD_ROOT)/chatchat

build:

	@rm -fr $(BUILD_ROOT)

	@echo build server
	@mkdir -p $(BUILD_DIR)/bin
	@cd server && GOOS=${GOOS} GOARCH=${GOARCH} go build -o ../$(BUILD_DIR)/bin/cc

	@echo build client
	@mkdir -p $(BUILD_DIR)/web
	@cp -fr web/templates $(BUILD_DIR)/web/
	@mkdir -p $(BUILD_DIR)/web/static/js
	@rm -f $(BUILD_DIR)/web/static/js/*.js
	@cd web/react && npm run build_pro
	@cp -fr web/static $(BUILD_DIR)/web/

	@echo make conf
	@mkdir -p $(BUILD_DIR)/conf/
	@cp conf/server_default.cfg $(BUILD_DIR)/conf/server.cfg
	@sed -i.bak 's|localhost:6379|redishost:6379|' $(BUILD_DIR)/conf/server.cfg
	@rm -f $(BUILD_DIR)/conf/server.cfg.bak

	@sed -i.bak 's|common.js|common.min.js|' $(BUILD_DIR)/web/templates/app.html
	@sed -i.bak 's|webClient.js|webClient.min.js|' $(BUILD_DIR)/web/templates/app.html
	@rm -fr $(BUILD_DIR)/templates/*.bak

	@tar -C $(BUILD_ROOT) -zcf $(BUILD_DIR).tar.gz chatchat 
	@rm -fr $(BUILD_DIR)

clean:

	rm -fr build

dbdata:

	@echo prepare redisdata volume
	@if [ $(shell docker ps -a | grep -ci redisdata) -eq 0 ]; then \
		docker create -v /data --name redisdata centos /bin/true; \
	fi

dev: dbdata

	@echo start containers
	@if [ $(shell docker ps | grep -ci redis) -eq 0 ]; then\
		cd docker/dev && docker-compose up -d ;\
	fi

	cd web/react/ && npm run watch

docker: GOOS=linux
docker: GOARCH=amd64
docker: build
	
	mv build/chatchat.tar.gz docker/pro/
	cd docker/pro && docker build -t chatchat .
	rm -f docker/pro/chatchat.tar.gz 

