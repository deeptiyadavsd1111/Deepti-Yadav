help:  ## Prints this help menu
	@grep -E '^[a-z.A-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":[^:]*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: start
start: install  ## Run Docusaurus locally
	npm start

.PHONY: install
install:
	npm install

.PHONY: docusaurus-update
docusaurus-update:  ## Update Docusaurus version
	npm i @docusaurus/core@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/tsconfig@latest @docusaurus/types@latest

.PHONY: update-npm
update-npm:
	npm update

.PHONY: help

.PHONY: lint-markdown
lint-markdown:  ## Run markdownlint on documentation files
	@errorlog=$$(mktemp); \
	infolog=$$(mktemp); \
	if npx markdownlint --ignore _site/ --ignore node_modules/ --ignore docusaurus/node_modules/ --ignore docs/contributions/thanks.md "docs/**/**/**/**/*.md" --disable MD013 MD033 MD045 MD029 MD024 1>"$$errorlog" 2>"$$infolog"; then \
		echo "INFO: markdownlint check passed"; \
		tail -n1 "$$infolog"; \
	else \
		echo "ERROR: markdownlint failed, check $$infolog for verbose detail. $$errorlog was:"; \
		cat "$$errorlog" >&2; \
		cat "$$infolog" >&2; \
		exit 1; \
	fi; \
	rm -f "$$errorlog" "$$infolog"

.PHONY: clean
clean:  ## Remove node_modules and build artifacts
	rm -rf node_modules
	rm -rf build
	rm -rf .docusaurus
