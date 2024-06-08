function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let sortedArr = [];

  while (left.length && right.length) {
    // console.log(sortedArr,left, right);
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
//   console.log([...sortedArr, ...left, ...right]);
  return [...sortedArr, ...left, ...right];
}

const numbers = [5, 3, 1, 8, 2, 4];
const sortedNumbers = mergeSort(numbers);
console.log(sortedNumbers);
