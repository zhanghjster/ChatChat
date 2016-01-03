.PHONY: build clean test

GOFLAGS ?= $(GOFLAGS:)

BUILD_ROOT=build
BUILD_DIR=$(BUILD_ROOT)/chatchat

build:
	
	@rm -fr $(BUILD_ROOT)

	@echo build server
	@mkdir -p $(BUILD_DIR)/bin
	@cd server && go build -o ../$(BUILD_DIR)/bin/cc

	@echo build client
	@mkdir -p $(BUILD_DIR)/web
	@cp -fr web/templates $(BUILD_DIR)/web/
	@mkdir -p $(BUILD_DIR)/web/static/js
	@cd web/react && npm run build_pro
	@cp -fr web/static $(BUILD_DIR)/web/

	@echo make conf
	@mkdir -p $(BUILD_DIR)/conf/
	@cp conf/server.cfg $(BUILD_DIR)/conf/

	@sed -i.bak 's|common.js|common.min.js|' $(BUILD_DIR)/web/templates/app.html
	@sed -i.bak 's|webClient.js|webClient.min.js|' $(BUILD_DIR)/web/templates/app.html
	@rm -fr $(BUILD_DIR)/templates/*.bak

	@tar -C $(BUILD_ROOT) -zcf $(BUILD_DIR).tar.gz chatchat 
	@rm -fr $(BUILD_DIR)
clean:

	rm -fr build

dev:

	cd docker/ && make run
	cd web/react/ && npm run watch
