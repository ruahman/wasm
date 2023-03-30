DIR := ${CURDIR}

CONTAINER := tinygo-wasm

IMAGE := tinygo:wasm

EXE := tinywasi

build:
ifdef wasm
	tinygo build -o $(EXE).wasm -target=wasi .
else ifdef tinygo
	tinygo build -o $(EXE) .
else
	go build -o $(EXE)
endif

run:
ifdef wasm
	wasmtime ./$(EXE).wasm
else ifdef tinygo
	tinygo run .
else
	go run .
endif

check:
	go build -o /dev/null

test:
	tinygo test -v $(package)

clean:
	- rm -f $(EXE)
	- rm -f *.exe 
	- rm -f *.wasm

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
	@echo please specify run, start, build, rm, or rmi
endif
