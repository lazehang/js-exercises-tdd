const removeVowels = require("./remove-vowels");
test("remove vowels from word", function () {
  // Arrange
  const payload = "abcdefghi";
  // Act
  const result = removeVowels(payload);
  // Assert
  expect(result).toBe("bcdfgh");
});
