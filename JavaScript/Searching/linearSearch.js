const arr = [1, 2, 3, 4, 6, 8, 9];

const linear_Search = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(linear_Search(arr, 8));
console.log(linear_Search(arr, 5));
