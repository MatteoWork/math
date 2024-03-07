function FibonacciSequence(n) {
    let fibonacciArray = [0, 1];
  
    for (let i = 2; i < n; i++) {
      fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    }
  
    return fibonacciArray.join(' ');
}

const n = 15;
const fibonacciSequence = FibonacciSequence(n);
console.log(`Fibonacci sequence ${fibonacciSequence}`);