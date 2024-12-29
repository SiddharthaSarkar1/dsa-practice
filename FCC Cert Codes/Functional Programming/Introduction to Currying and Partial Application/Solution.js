// Introduction to Currying and Partial Application

function add(x) {
  // Only change code below this line

  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };

  // Only change code above this line
}

add(10)(20)(30);

const fn2 = add(5);
const fn3 = fn2(10);
console.log(fn3(20));
