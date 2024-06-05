const sumOfArrays = (arr, n) => {
  if (n === 0) {
    return 0;
  }
  return arr[n - 1] + sumOfArrays(arr, n - 1);
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

sumOfArrays(arr, 5);
