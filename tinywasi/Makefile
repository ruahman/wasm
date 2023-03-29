
build:
ifdef wasi
	tinygo build -target=wasi .
else
	tinygo build .
endif

run:
ifdef wasmtime
	wasmtime .\tinywasi.wasm
else
	tinygo run .
endif

test:
	tinygo test -v $(package)
