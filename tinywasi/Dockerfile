FROM tinygo/tinygo

RUN sudo apt-get update && sudo apt-get -y install make curl xz-utils

RUN curl https://wasmtime.dev/install.sh -sSf | bash

WORKDIR /code
