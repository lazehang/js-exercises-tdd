const greetPeople = require("./greet-people");
test("print list of names prefixed with Hello", function () {
  // Arrange
  const names = ["John", "Jake"];
  // Act
  const greet = greetPeople(names);
  // Assert
  expect(greet).toEqual("Hello JohnJake");
});
