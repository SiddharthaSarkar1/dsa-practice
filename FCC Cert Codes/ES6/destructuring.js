const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;

// Again, name would have a value of the string John Doe, and age would have the number 34.

// Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.

// You can extract as many or few values from the object as you want.

const { name, age } = user;

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
  
  const { today, tomorrow } = HIGH_TEMPERATURES;
  // const tomorrow = HIGH_TEMPERATURES.tomorrow;
  
  // Only change code above this line