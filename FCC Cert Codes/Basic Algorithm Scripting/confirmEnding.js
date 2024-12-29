function confirmEnding(str, target) {
    console.log(str.length, target.length, str.length - target.length)
    let endOfString = str.substring(str.length - target.length);
    console.log(endOfString)
  
    return endOfString === target;
  }
  
  confirmEnding("Bastian", "n");