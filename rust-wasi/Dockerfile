FROM rust:latest

RUN rustup target add wasm32-wasi

RUN curl https://wasmtime.dev/install.sh -sSf | bash

WORKDIR /code
