function factorialize(num) {
  let factorial = 1;
  if (num === 0) return 1;

  for (let i = num; i > 0; i--) {
    factorial *= i;
  }

  return factorial;
}

factorialize(5);
console.log(factorialize(5));
