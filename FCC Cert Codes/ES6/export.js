//1st way of export

export const add = (x, y) => {
    return x + y;
  }

//2nd way of export

const subtract = (x, y) => {
    return x - y;
  }
  
  export { subtract };

//Multiple export

const uppercaseString = (string) => {
    return string.toUpperCase();
  }


const lowercaseString = (string) => {
    return string.toLowerCase()
  }

//Both the methods are exported together
export { uppercaseString,lowercaseString };