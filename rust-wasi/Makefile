DIR := ${CURDIR}

CONTAINER := rust-wasm

IMAGE := rust:wasm

EXE := rust_wasi

build:
ifdef wasm
	cargo build --target wasm32-wasi
else
	cargo build
endif

check:
	cargo check

test:
	cargo test $(path) -- --nocapture

run:
ifdef wasm
	wasmtime target/wasm32-wasi/debug/$(EXE).wasm
else
	cargo run
endif

clean:
	cargo clean

docker:
ifdef run
	docker run -it -v $(DIR):/code --name $(CONTAINER) $(IMAGE) bash
else ifdef start
	docker start -ai $(CONTAINER)
else ifdef build
	docker build -t $(IMAGE) .
else ifdef rm
	docker container rm $(CONTAINER)
else ifdef rmi
	docker image rm $(IMAGE)
else
	@echo please specify either run, start, build, rm, or rmi
endif
