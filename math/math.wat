(module
  (func $return20 (result i32)
        i32.const 20)
  (export "return20" (func $return20))
  (func $echo (param i32) (result i32)
        local.get 0)
  (export "echo" (func $echo))
  (func $square (param i32) (result i32)
        local.get 0
        local.get 0
        i32.mul)
  (export "square" (func $square))
  (func $add (param i32) (param i32) (result i32)
        local.get 0
        local.get 1
        i32.add)
  (export "add" (func $add)))
