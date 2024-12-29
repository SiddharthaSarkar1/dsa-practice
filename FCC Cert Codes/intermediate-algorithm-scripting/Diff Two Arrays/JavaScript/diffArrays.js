function diffArrays(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const newArr = [...set1]
    .filter((element) => !set2.has(element))
    .concat([...set2].filter((element) => !set1.has(element)));

  return newArr;
}

// Example usage:
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];
console.log(diffArrays(arr1, arr2));
