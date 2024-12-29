function symmetricDifference(arr1, arr2) {
  return [
    ...arr1.filter((element) => !arr2.includes(element)),
    ...arr2.filter((element) => !arr1.includes(element)),
  ];
}

// Example usage:
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(symmetricDifference(arr1, arr2));
