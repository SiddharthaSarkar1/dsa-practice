const x = [1, 4, 6, 0, -9, -5];

// Ascending
x.sort(); // O(NlogN)
console.log(x);


// Descending
// 1, 4 => a=1,b=4, (4-1=3) if positive then the number will swap 4,1
x.sort((a, b) => b - a);
console.log(x);

// How to reverse an array?
x.reverse();
console.log(x);

const arr = [1, 2, 3, 4, 5, 6, 0,-5, -7, -12];

// Map, Filter & Reduce

const newMapArr = arr.map((ele, i) => ele * ele);
console.log(newMapArr);

const positiveNumbers = arr.filter((ele, i) => ele > 0);
console.log(positiveNumbers);

const sumOFArr = positiveNumbers.reduce((acc, ele) => acc + ele);
console.log(sumOFArr);

// Flat Array

const y = [1, 2, [4, 5, [6, 7]], 8, 9];
const flattedArray = y.flat(2);
console.log(flattedArray);

const z = [1, 2, [4, 5, [6, [7]]], 8, 9];
const flattedArray1 = y.flat(3);
console.log(flattedArray1);

// It returns first one
const positiveNumber = x.find((ele, i) => ele > 0);
console.log(positiveNumber);