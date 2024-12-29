function fearNotLetter(str) {
  const start = str[0].charCodeAt(0);

  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) !== start + i) {
      // console.log(String.fromCharCode(start + i))
      return String.fromCharCode(start + i);
    }
  }
  return undefined;
}

fearNotLetter("abce");
