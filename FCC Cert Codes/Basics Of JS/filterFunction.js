// Filter()

// Selects a subset of elements from the original array based on a condition.
// Returns a new array with a length less than or equal to the original array.
// Does not modify the original array.
// Used for data filtering, selection, or reduction.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const evenNumbers = numbers.filter((element) => element % 2 === 0);
console.log(evenNumbers);

// Key differences:

// Purpose: map() transforms data, while filter() selects data.
// Length: map() preserves the original array length, while filter() reduces the length.
// Callback: map() callback returns a new value, while filter() callback returns a boolean (true/false).

// When to use:

// Use map() when you need to transform or convert data.
// Use filter() when you need to select a subset of data based on conditions.

// Here's an example combining both:

const num = [1, 2, 3, 4, 5, 6, 7, 8];
const doubledEvenNumbers = num
  .filter((el) => el % 2 === 0)
  .map((num) => num * 2);
console.log(doubledEvenNumbers);
