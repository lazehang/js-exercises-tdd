const removeVowelsForWords = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function () {
  const input = ["Irina", "Etza", "Daniel"];
  const expected = ["rn", "tz", "Dnl"];

  const result = removeVowelsForWords(input);

  expected.forEach((item, index) => {
    expect(result[index]).toBe(item);
  });
});
