
build:
ifdef wasi
	cargo build --target wasm32-wasi
else
	cargo build
endif

run:
ifdef wasmtime
	wasmtime .\target\wasm32-wasi\debug\rust_wasi_by_example.wasm
else
	cargo run
endif

test:
	cargo test $(path) -- --nocapture

check:
	cargo check

