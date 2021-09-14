// Create an object ‘actor’ that has properties of the person like name, age, email, gender, place of birth and availability (boolean)

let actor = {
  name: "Jenaro Sodicta", 
  age: 32,
  email: "jensen@jensodicta.com",
  gender: "Male", 
  "Place of birth": "Sydney", 
  availability: true,
  actorIntro: function () {
    return `Hi, my name is ${this.name}.`
  },
  movies: [
    { title: "Only the Strong", 
      role: "Young Johnny Bravo", 
      year: 1994 
    },
    { title: "Only the Stronger", 
    role: "Old Johnny Bravo", 
    year: 1995
    },
    { title: "Only the Strongest", 
    role: "Son of Johnny Bravo", 
    year: 1996
    },
  ]
};

console.log(typeof actor);
console.log(actor);
console.log(actor.name);
console.log(actor.availability);

actor.talent = ["martial arts", "tennis", "singing"]; 
// actor.actorIntro = `Hi, I'm ${actor.name}.`
console.log(actor);
console.log(actor.actorIntro);