const greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function () {
  // Arrange
  const inputWithOneName = ["John"];
  const inputWithTwoNames = ["John", "Jake"];
  const inputWithMultipleNames = ["John", "Jake", "Mary"];

  expect(greetPeople(inputWithOneName)).toEqual("Hello John");
  expect(greetPeople(inputWithTwoNames)).toEqual("Hello John and Jake");
  expect(greetPeople(inputWithMultipleNames)).toEqual(
    "Hello John, Jake and Mary"
  );
});
