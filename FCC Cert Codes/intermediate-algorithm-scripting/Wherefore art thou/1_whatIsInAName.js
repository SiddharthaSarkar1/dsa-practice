function whatIsInAName(collection, source) {
  const sourceKeys = Object.keys(source);
  console.log(sourceKeys);

  return collection.filter((obj) =>
    sourceKeys.every(
      (key) => obj.hasOwnProperty(key) && obj[key] === source[key]
    )
  );
}

// Example usage:
const collection = [
  { first: "Romeo", last: "Montague" },
  { first: "Mercutio", last: null },
  { first: "Tybalt", last: "Capulet" },
];
const source = { last: "Capulet" };
console.log(whatIsInAName(collection, source));
