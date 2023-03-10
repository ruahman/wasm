import assert from "assert";
import { add, square } from "../build/debug.js";
assert.strictEqual(add(1, 2), 3);
assert.strictEqual(square(3), 9)
console.log("ok");
