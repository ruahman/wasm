FROM rust:latest

WORKDIR /code

RUN rustup target add wasm32-wasi
RUN curl https://wasmtime.dev/install.sh -sSf | bash

