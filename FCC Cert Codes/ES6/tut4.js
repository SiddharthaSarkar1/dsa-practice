const myFunc = function () {
  const myVar = "value";
  return myVar;
};

const myFunc = () => {
  const myVar = "value";
  return myVar;
};

//When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. This helps simplify smaller functions into one-line statements:

const myFunc = () => "value";

//Rewrite the function assigned to the variable magic which returns a new Date() to use arrow function syntax. Also, make sure nothing is defined using the keyword var.

const magic = () => new Date();
