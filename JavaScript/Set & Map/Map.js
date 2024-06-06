// Creating a Map
const myMap = new Map();

// Adding key-value pairs to the Map
myMap.set("name", "Siddhartha");
myMap.set("age", 24);
myMap.set("city", "Kolkata");

// Getting a value using a key
console.log(myMap.get("name")); // Vishal

// Checking if a key exists
console.log(myMap.has("age")); // true

// Removing a key-value pair
myMap.delete("age");

// Iterating through the Map
for (const [key, value] of myMap) {
    console.log(key, value);
}

// Size of the Map
console.log(myMap.size); // 1

// Clearing the Map
myMap.clear();