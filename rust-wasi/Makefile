
DIR := ${CURDIR}

CONTAINER := rust-wasm

IMAGE := rust:wasm

build:
ifdef wasm
	cargo build --target wasm32-wasi
else
	cargo build
endif

run:
ifdef wasm
	wasmtime target/wasm32-wasi/debug/rust_wasi.wasm
else
	cargo run
endif

docker:
ifdef run
	docker run -it -v $(DIR):/code --name $(CONTAINER) $(IMAGE) bash
endif
ifdef start
	docker start -ai $(CONTAINER)
endif
ifdef build
	docker build -t $(IMAGE) .
endif
ifdef rm
	docker container rm $(CONTAINER)
endif
ifdef rmi
	docker image rm $(IMAGE)
endif

test:
	cargo test $(path) -- --nocapture

check:
	cargo check
