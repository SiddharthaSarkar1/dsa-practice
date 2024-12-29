Array.prototype.myFilter = function (callback) {
  const myArray = [];
  for (let i = 0; i < this.length; i++) {
    if (i in this) {
      if (callback(this[i], i, this)) {
        myArray.push(this[i]);
      }
    }
  }
  return myArray;
};

console.log([23, 65, 98, 5, 13].myFilter((item) => item % 2));
