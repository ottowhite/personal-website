COMPOSE ?= docker compose
SERVICE ?= web

.DEFAULT_GOAL := help

.PHONY: help compose/build compose/up compose/down compose/restart compose/ps compose/logs compose/shell compose/pull compose/health

help: ## Show this help
	@grep -hE '^[a-zA-Z0-9/_-]+:.*?## ' $(MAKEFILE_LIST) | \
		sort | awk 'BEGIN {FS = ":.*?## "} {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

compose/build: ## Build (or rebuild) the image
	$(COMPOSE) build

compose/up: ## Build and start the container in the background
	$(COMPOSE) up -d --build

compose/down: ## Stop and remove the container and network
	$(COMPOSE) down

compose/restart: ## Restart the running container
	$(COMPOSE) restart

compose/ps: ## Show container status
	$(COMPOSE) ps

compose/logs: ## Follow container logs
	$(COMPOSE) logs -f

compose/shell: ## Open a shell in the running container
	$(COMPOSE) exec $(SERVICE) sh

compose/pull: ## Pull base images referenced by the build
	$(COMPOSE) pull

compose/health: ## Print the container health status
	@docker inspect -f '{{.State.Health.Status}}' personal-website
