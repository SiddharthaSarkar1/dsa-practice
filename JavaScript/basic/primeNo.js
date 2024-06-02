const isPrimeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

const isPrimeNo = (n) => {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrimeNumber(3));
console.log(isPrimeNumber(17));

console.log(isPrimeNo(3));
console.log(isPrimeNo(17));
