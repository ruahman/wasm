
DIR := ${CURDIR}

build:
ifdef docker
ifdef wasi
	docker run --rm -it -v $(DIR):/code -w /code rust:wasi cargo build --target wasm32-wasi
else
	docker run --rm -it -v $(DIR):/code -w /code rust:wasi cargo build
endif
else
ifdef wasi
	cargo build --target wasm32-wasi
else
	cargo build
endif
endif

run:
ifdef wasmtime
	wasmtime .\target\wasm32-wasi\debug\rust_wasi.wasm
else
	cargo run
endif

shell:
	docker run --rm -it -v $(DIR):/code -w /code rust bash

test:
	cargo test $(path) -- --nocapture

check:
	cargo check

docker:
	 docker build -t rust:wasi .
