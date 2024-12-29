function uniteUnique(...arr) {
  const combineValues = [].concat(...arr);
  const uniqueValues = [];
  const seen = new Set();

  for (let val of combineValues) {
    if (!seen.has(val)) {
      seen.add(val);
      uniqueValues.push(val);
    }
  }
  console.log(uniqueValues);
  return uniqueValues;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
