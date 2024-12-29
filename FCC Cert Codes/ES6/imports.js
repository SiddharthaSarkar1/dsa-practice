//1) process 1 to import
import { add, subtract, uppercaseString, lowercaseString } from './export.js';

//2) process 2 to import
import * as stringFunctions from './string_functions.js'

console.log(add(2,3));
console.log(subtract(2,3));
console.log(uppercaseString("hello"));
console.log(lowercaseString("WORLD!"));

