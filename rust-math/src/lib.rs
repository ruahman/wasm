use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn add2numbers(n1:i32, n2:i32) -> i32 {
    n1 + n2
}
