const fibonacciNumber = (n) => {
  if (n < 2) {
    return n;
  }

  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
};

console.log(fibonacciNumber(7))
console.log(fibonacciNumber(10))
