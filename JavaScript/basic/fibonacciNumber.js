function fibonacciNumber(n) {
  if (n > 0) {
    if (n < 2) return n;

    let prev = 0,
      curr = 1,
      next;
    for (let i = 2; i <= n; i++) {
      next = prev + curr;
      prev = curr;
      curr = next;
    }
    return next;
  }
}

const number = 8;
console.log(fibonacciNumber(number));


// Print numbers in console
function printFibonacciNumber(n) {
    if (n > 0) {
      if (n < 2) return n;
  
      let prev = 0,
        curr = 1,
        next;
        console.log(prev);
        console.log(curr);
      for (let i = 2; i < n; i++) {
        next = prev + curr;
        prev = curr;
        curr = next;
        console.log(next);
      }
    }
  }
  
  const num = 8;
  console.log(printFibonacciNumber(num));
