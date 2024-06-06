let obj = { key: "value" };

// Creating a WeakMap
let weakMap = new WeakMap();
weakMap.set(obj, "metadata");

// Checking if the object still exists in the WeakMap
console.log(weakMap.has(obj)); // true

// Removing the strong reference to the object
obj = null;

// At this point, the object is no longer strongly referenced
// The WeakMap's weak reference will allow the object to be garbage collected
console.log(weakMap.has(obj)); // false
