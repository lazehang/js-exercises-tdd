function removeVowels(word) {
  var characters = word.split("");

  var result = [];

  const vowels = ["a", "e", "i", "o", "u"];

  characters.forEach(function (character) {
    if (vowels.includes(character.toLowerCase())) return;
    result.push(character);
  });

  return result.join("");
}

module.exports = removeVowels;

/*
  Let's trace this piece of code - what is the value of result with this input

  var result = removeVowels('samuel');

  what is the value of result?
*/
