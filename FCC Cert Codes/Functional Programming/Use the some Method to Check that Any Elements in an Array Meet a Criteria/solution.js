// const numbers = [10, 50, 8, 220, 110, 11];

// numbers.some(function(currentValue) {
//   return currentValue < 10;
// });

function checkPositive(arr) {
  // Only change code below this line

  return arr.some((currVal) => currVal > 0);

  // Only change code above this line
}

console.log(checkPositive([1, 2, 3, -4, 5]));
