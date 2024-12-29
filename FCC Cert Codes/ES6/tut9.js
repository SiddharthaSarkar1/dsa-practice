var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);

// maximus would have a value of 89.

// We had to use Math.max.apply(null, arr) because Math.max(arr) returns NaN. Math.max() expects comma-separated arguments, but not an array. The spread operator makes this syntax much better to read and maintain.

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// maximus would have a value of 89.

// ...arr returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. For example:

// Copy all contents of arr1 into another array arr2 using the spread operator.

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Change this line

console.log(arr2);