function translatePigLatin(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  if (vowels.includes(str[0].toLowerCase())) {
    return str + "way";
  } else {
    //Find the index of first vowel
    let vowelIndex = 0;

    while (
      vowelIndex < str.length &&
      !vowels.includes(str[vowelIndex].toLowerCase())
    ) {
      vowelIndex++;
    }

    return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
  }
}


// Test cases
console.log(translatePigLatin('hello')); // 'ellohay'
console.log(translatePigLatin('apple')); // 'appleway'
console.log(translatePigLatin('strong')); // 'ongstray'


