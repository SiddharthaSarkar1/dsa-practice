// Question 1: How do you check if an element exists in an array?

const findElement = (arr, target) => {
  for (let x of arr) {
    if (x === target) {
      return true;
    }
  }
  return false;
};

const arr = [1, 2, 3, 4, "Hello", { name: "Siddhartha" }, [1, 2, 3], 4];
console.log(findElement(arr, "Hello"))
console.log(findElement(arr, "World"))