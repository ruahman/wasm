const wasmCode = await Deno.readFile("math.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);
const return20 = wasmInstance.exports.return20 as CallableFunction
const echo = wasmInstance.exports.echo as CallableFunction
const square = wasmInstance.exports.square as CallableFunction
const add = wasmInstance.exports.add as CallableFunction
console.log(return20())
console.log(echo(33))
console.log(square(3))
console.log(add(2,3))
