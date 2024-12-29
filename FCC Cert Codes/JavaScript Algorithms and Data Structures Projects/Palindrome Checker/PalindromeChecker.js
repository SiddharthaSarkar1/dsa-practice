function palindrome(str) {
  const normalizedStr = str.replace(/[^a-z0-9]/gi, "").toLowerCase();

  const reversedStr = normalizedStr.split("").reverse().join("");

  return normalizedStr === reversedStr;
}

console.log(palindrome("eye"));
console.log(palindrome("pop"));
console.log(palindrome("love"));
