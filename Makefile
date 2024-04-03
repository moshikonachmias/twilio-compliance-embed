.PHONY: targets

targets:
	@echo ----- available make targets:
	@grep '^[A-Za-z0-9\-]*:' Makefile | cut -d ':' -f 1 | sort

clean:
	rm -rf ./dist
	rm -rf ./.parcel-cache

build:
	yarn build

package: clean build
	yarn pack
