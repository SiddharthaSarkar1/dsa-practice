function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;

  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

// Test cases
console.log(sumPrimes(10)); // 17 (2 + 3 + 5 + 7)
console.log(sumPrimes(2)); // 2
console.log(sumPrimes(20)); // 77 (2 + 3 + 5 + 7 + 11 + 13 + 17 + 19)
