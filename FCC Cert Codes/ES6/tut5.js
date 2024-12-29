const doubler = (item) => item * 2;
doubler(4);

const doubler = item => item * 2;


const multiplier = (item, multi) => item * multi;
multiplier(4, 2);

//Rewrite the myConcat function which appends contents of arr2 to arr1 so that the function uses arrow function syntax.

// const myConcat = (arr1, arr2) => {
//   return arr1.concat(arr2);
// };

const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));