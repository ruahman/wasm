
DIR := ${CURDIR}

build:
ifdef docker
ifdef wasi
	docker run --rm -it -v $(DIR):/home/tinygo tinygo/tinygo tinygo build -o tinywasi.wasm -target wasi .
else
	docker run --rm -it -v $(DIR):/home/tinygo tinygo/tinygo tinygo build -o tinywasi.wasm .
endif
else
ifdef wasi
	tinygo build -target=wasi .
else
	tinygo build .
endif
endif

run:
ifdef wasmtime
	wasmtime .\tinywasi.wasm
else
	tinygo run .
endif

test:
	tinygo test -v $(package)

shell:
	docker run --rm -it -v ${pwd}:/home/tinygo tinygo/tinygo bash

clean:
	del tinywasi.* 
