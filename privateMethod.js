const Person = function (name, age) {
  this.name = name || ''; // Public attribute, default value is null
  this.age = age || 30; // Public attribute, default value is null
  // Private method
  let increaseAge = function () {
    this.age = this.age + 1;
  };
  // Public method(added to this)
  this.displayIncreasedAge = function () {
    increaseAge();
    console.log(this.age);
  };
};
// Create Person class object. creates a copy of privateMethod
const person1 = new Person('Pietro', 32);
// Create Person class object. creates a copy of privateMethod
const person2 = new Person('Ana', 25);

console.log(person1, person2);

console.log(person1.displayIncreasedAge());
console.log(person1);
