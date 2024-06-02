// How do you find the index of an element in an array?

const findIndex = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
};


const arr = [1, 2, 3, 4, "Hello", { name: "Siddhartha" }, [1, 2, 3], 4];
console.log(findIndex(arr, "Hello"))
console.log(findIndex(arr, "World"))