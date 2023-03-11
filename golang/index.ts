import "./assets/wasm_exec.js";

const go = new Go();

const wasmCode = await Deno.readFile("wasm/main.wasm");
WebAssembly.instantiate(wasmCode, go.importObject)
  .then((result) => {
    go.run(result.instance);
  });
