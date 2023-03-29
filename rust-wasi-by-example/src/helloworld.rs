
pub fn run(){
    println!("hello world")
} 

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_helloworld() {
       run() 
    }
}
