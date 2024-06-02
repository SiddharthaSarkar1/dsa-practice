// How do you create an empty array in JavaScript?

const arr1 = [];
const arr2 = new Array();

// Array in javascript can be of different datatypes
const arr = [1, 2, 3, 4, "Hello", { name: "Siddhartha" }, [1, 2, 3], 4];
console.log(arr);

const firstElement = arr[0];
const lastElement = arr[arr.length - 1];

console.log(firstElement, lastElement);

// How do you remove the last element from an array?
const popedLastElement = arr.pop();
console.log(arr, popedLastElement);

//How do you add an element to the end of an array?

arr.push(120);
console.log(arr);

arr.unshift(150);
arr.unshift(160);
arr.unshift(170);
console.log(arr);

arr.shift();
console.log(arr);

// How do you loop through an array in JavaScript?

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("forEach Loop");
arr.forEach((x, i) => {
  
  console.log(x, i);
});

console.log("for of loop");
for (let x of arr) {
  console.log(x);
}
