// Array of Objects 
// Create an array of objects named ‘cars’ with the following data

let cars = [
  {
    "colour": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "colour": "red",
    "type": "station wagon",
    "registration": new Date('2018-03-03'),
    "capacity": 5
  },
]

// Add a new car with these details. colour=silver, type=sedan, registration= today’s date and capacity=5
let newCar = {
  "colour": "silver",
  "type": "sedan",
  "registration": '2021-09-14',
  "capacity": 5
}
cars.push(newCar); 

// for (let c = 0; c < cars.length; c++) {
//   console.log(cars[c]); 
// }

// Remove the last object from the array and log the array
cars.pop()
// console.log(cars); 

// Remove the first object from the array and log the array
cars.shift(); 
// console.log(cars); 

// Add a new car with these details. colour=blue, type=hatch, registration= today’s date and capacity=5

newCar = {
  "colour": "blue",
  "type": "hatch",
  "registration": '2021-09-14',
  "capacity": 5
}; 
cars.push(newCar); 
console.log(cars); 
console.log(cars.length); 
console.log(cars[0].colour);

// Loop through the array to log the properties
// Loop through the array to log the types of cars (Use a for loop - try using foreach)

// for (let c = i; i < cars.length; c++) {
//   console.log(cars[i].type);
// };

cars.forEach( car => {
  console.log(car.type);
});

