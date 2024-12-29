function sumFibs(num) {
  let first = 0;
  let second = 1;
  let sum = 0;

  while (second <= num) {
    if (second % 2 !== 0) {
      sum += second;
    }
    let temp = 0;
    temp = first;
    first = second;
    second = temp + second;
  }
  return sum;
}

sumFibs(10);
