let firstName = "Siddhartha";
console.log(firstName.length);

console.log(firstName.charAt(4));
console.log(firstName[3]);
console.log(firstName.charCodeAt(4)); // ASCII code

console.log(firstName.includes("z"));
console.log(firstName.includes("a"));

console.log(firstName.indexOf("h"));
console.log(firstName.lastIndexOf("h"));

let anotherName = "Aditi";
let anotherName2 = "Siddhartha";
console.log(firstName.localeCompare(anotherName)); // 1 (& if strings are equal it return 0)
console.log(firstName.localeCompare(anotherName2)); // 1 (& if strings are equal it return 0)

const str =
  "Siddhartha is Good Software Engineer. Siddhartha is Good Developer";
console.log(str.replace("Siddhartha", "Tutai"));
console.log(str.replaceAll("Siddhartha", "Tutai"));

console.log(str.substring(6, 30)); 
console.log(str.slice(-12, -1));

console.log(str.split(""));
const subString = str.split(" ");
console.log(subString.join(" "));


console.log(str.startsWith("Siddhartha")); // true
console.log(str.endsWith("Developer")); // true

const str1 =
  "                    Siddhartha is Good Software Engineer. Siddhartha is Good Developer            ";

const trimStr = str1.trim();
const trimStrStart = str1.trimStart();
const trimStrEnd = str1.trimEnd();
console.log(trimStr, trimStr.length);
console.log(str.toLowerCase(), trimStrStart.length);
console.log(str.toUpperCase(), trimStrEnd.length);

const num = 123;
console.log(num, num.toString());

const obj = {
    name: "Siddhartha",
    course: "DSA and Dev"
};
console.log(obj, JSON.stringify(obj));

const lastName = "Sarkar";
console.log(firstName +" "+ lastName);
console.log(`${firstName} ${lastName} is a Good Developer.`);
console.log(firstName.concat(lastName, " is a", " Cute."));




