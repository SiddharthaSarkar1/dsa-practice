// Binary Search using Recursion
const arr = [1, 4, 5, 6, 7, 9, 12, 15];

const binarySearchRecur = (arr, target) => {
  return binarySearchUntil(arr, target, 0, arr.length);
};

const binarySearchUntil = (arr, target, start, end) => {
  if (start > end) return -1;

  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === target) {
    return arr[mid];
  } else if (arr[mid] > target) {
    return binarySearchUntil(arr, target, start, mid - 1);
  } else {
    return binarySearchUntil(arr, target, mid + 1, end);
  }
};

console.log(binarySearchRecur(arr, 7));
console.log(binarySearchRecur(arr, 9));
