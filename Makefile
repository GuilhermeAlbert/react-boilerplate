.PHONY: nop
nop:
	@echo "Please pass a target you want to run"

.PHONY: up
up:
	yarn start


.PHONY: test
test:
	yarn test