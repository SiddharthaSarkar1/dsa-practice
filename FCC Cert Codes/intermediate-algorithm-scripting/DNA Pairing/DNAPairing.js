function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  const result = [];

  for (let char of str) {
    result.push([char, pairs[char]]);
  }
  console.log(result);
  return result;
}

pairElement("GCG");
