let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

//Complete the regex waldoRegex to find "Waldo" in the string waldoIsHiding with a literal match.

let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);

//Complete the regex petRegex to match the pets dog, cat, bird, or fish.

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);

//Write a regex fccRegex to match freeCodeCamp, no matter its case. Your regex should not match any abbreviations or variations with spaces.

let myString = "freeCodeCamp";
let fccRegex = /FREECODECAMP/i; // Change this line
let result = fccRegex.test(myString);

//Extract Matches
// So far, you have only been checking if a pattern exists or not within a string. You can also extract the actual matches you found with the .match() method.

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// Here's an example:

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);

// Here the first match would return ["Hello"] and the second would return ["expressions"].

// Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

'string'.match(/regex/);
/regex/.test('string');

// Apply the .match() method to extract the string coding.

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

//Find More Than the First Match
// So far, you have only been able to extract or search a pattern once.

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Here match would return ["Repeat"].

// To search or extract a pattern more than once, you can use the global search flag: g.

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
And here match returns the value ["Repeat", "Repeat", "Repeat"]

// Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

// Note
// You can have multiple flags on your regex like /search/gi

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/gi; // Change this line
let result = twinkleStar.match(starRegex); // Change this line

//Match Anything with Wildcard Period

//The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

//Complete the regex unRegex so that it matches the strings run, sun, fun, pun, nun, and bun. Your regex should use the wildcard character.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);

//Match Single Character with Multiple Possibilities

//For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

// In order, the four match calls would return the values ["big"], ["bag"], ["bug"], and null.

//Use a character class with vowels (a, e, i, o, u) in your regex vowelRegex to find all the vowels in the string quoteSample.

// Note: Be sure to match both upper- and lowercase vowels.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line

//Match Letters of the Alphabet

//For example, to match lowercase letters a through e you would use [a-e].

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);

// In order, the three match calls would return the values ["cat"], ["bat"], and null.

// Match all the letters in the string quoteSample.

// Note: Be sure to match both uppercase and lowercase letters.

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line

//Match Numbers and Letters of the Alphabet

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.
// Also, it is possible to combine a range of letters and numbers in a single character set.

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

// Create a single regex that matches a range of letters between h and s, and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//Match Single Characters Not Specified

//For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

// Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

// If it were instead checking the string abab, it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them. Finally, since there is no a in the string bcd, it wouldn't find a match.

// You want to find matches when the letter s occurs one or more times in Mississippi. Write a regex that uses the + sign.

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);


