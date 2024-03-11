const count = 10;
const number = findNumbers(count);
console.log(number.join(' '));

function isFibonacci(num) {
  // Check if a number is in the Fibonacci sequence
  let a = 0, b = 1;
  while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
  }
  return b === num;
}

function isPrime(num) {
  // Check if a number is prime
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return true;
}

function findNumbers(count) {
  // Find numbers
  let result = [];
  let num = 2;

  while (result.length < count) {
      if (!isFibonacci(num) && !isPrime(num)) {
          result.push(num);
      }
      num++;
  }

  return result;
}