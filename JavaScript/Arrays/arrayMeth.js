const arr = [1, 2, 3, 4, "Hello", { name: "Siddhartha" }, [1, 2, 3], 4];

// Splice

console.log(arr);
arr.splice(1, 3);
console.log(arr); //[ 1, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ]
arr.splice(1, 0, 2, 3, 4, 5, 6);
console.log(arr); //[ 1, 2, 3, 4, 5, 6, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ]
arr.splice(1, 3, 6, 7, 8);
console.log(arr); //[ 1, 6, 7, 8, 5, 6, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ]

//Slice

const subArr = arr.slice(1, 4); // [start, end)
console.log(subArr); // [ 6, 7, 8 ]
console.log(arr); // [ 1, 6, 7, 8, 5, 6, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ]

// Shallow Copy of Array

const arrB = arr;
arrB.splice(1, 4);
console.log(arrB, arr); // [ 1, 6, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ] [ 1, 6, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ]

// Deep Copy of Array

const arrC = [...arr]; // Spread operator use
const arrD = Array.from(arr);
const arrE = arr.concat();
arrC.splice(1, 4);
arrD.splice(1, 4);
arrE.splice(1, 3);
console.log(arrC, arrD, arrE, arr); // [ 1, 4 ] [ 1, 4 ] [ 1, [ 1, 2, 3 ], 4 ] [ 1, 6, 'Hello', { name: 'Siddhartha' }, [ 1, 2, 3 ], 4 ]

// How to concatenate two arrays in JavaScript?

const newArr = [...arr, ...arrE];
const newArr2 = arr.concat(arrE);
console.log(newArr, newArr2);