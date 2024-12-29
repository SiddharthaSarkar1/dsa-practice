function myReplace(str, before, after) {
  const isUpperCase = before[0] === before[0].toUpperCase();
  console.log(isUpperCase);

  if (isUpperCase) {
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }

  const regex = new RegExp(before, "g");

  return str.replace(regex, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
console.log(myReplace("I think we should look up there", "up", "Down"));
