DIR := ${CURDIR}

CONTAINER := tinygo-wasm

IMAGE := tinygo:wasm

EXE := tinywasi

build:
ifdef wasm
	tinygo build -o $(EXE).wasm -target=wasi .
else
	tinygo build -o $(EXE) .
endif

run:
ifdef wasm
	wasmtime ./$(EXE).wasm
else
	tinygo run .
endif

test:
	tinygo test -v $(package)

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

clean:
	del *.exe 
	del *.wasm
