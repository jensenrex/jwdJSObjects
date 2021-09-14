// Declare a class Person. The class should have
// a constructor accepting firstname and lastname. 
// A function that introduces the person - “Hi my name is ___ ___ “;

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

  }
  personIntro() {
    return `Hi, my name is ${this.firstName} ${this.lastName}!`;
  }
}

const person = new Person("Johnny", "Bravo"); 
console.log(person.personIntro()); 