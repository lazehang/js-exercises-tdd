function greetPeople(people) {
  var greeting = "Hello";

  people.forEach(function (person, index) {
    if (index === people.length - 1) {
      greeting += " " + person;
      return;
    }
    const connector = index + 2 == people.length ? " and" : ",";
    greeting = greeting + " " + person + connector;
  });

  return greeting;
}

module.exports = greetPeople;

/*
  Let's trace this piece of code - what is the value of result with this input

  var mentors = ['Irina', 'Ashleigh', 'Etza'];
  var result = greetPeople(mentors)
*/
