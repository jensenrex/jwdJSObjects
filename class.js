// Create an instance of class Box
// const square = new Box(10, 10);

// Call the method area
// console.log(square.calcArea()); // 100

class Box { 
  constructor(h, w) { 
    (this.height = h), (this.width = w); 
  }
  calcArea() {
    return this.height * this.width; 
  }
  calcPerimiter() {
    return this.height * 4; 
  }
}

const square = new Box(5, 5); 
console.log(square.calcArea()); 

const rectangle = new Box(10, 5); 
console.log(rectangle.calcArea()); 



