// ===========================
// oop-master.js - JavaScript OOP Concepts
// ===========================

// OOP (Object-Oriented Programming) focuses on creating objects and organizing code with classes, methods, and properties.
// Key principles: Encapsulation, Abstraction, Inheritance, Polymorphism, and using Getters/Setters.

// ---------------------------
// 1. Objects with methods
// ---------------------------
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};

console.log(car.start());
// Output: "Toyota car got started in 2020"

// ---------------------------
// 2. Constructor Functions
// ---------------------------
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);
console.log(john.name);
// Output: "John Doe"

// ---------------------------
// 3. Prototype Methods
// ---------------------------
function Animal(type) {
  this.type = type;
}

// Adding shared method to all Animal instances
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.speak());
// Output: "Dog makes a sound"

// ---------------------------
// 4. Extending built-in objects (Array prototype example)
// ---------------------------
Array.prototype.bashanta = function () {
  return `Custom method ${this}`;
};

let myArray = [1, 2, 3];
console.log(myArray.hitesh());
// Output: "Custom method 1,2,3"

// ---------------------------
// 5. Classes & Inheritance
// ---------------------------
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class Car extends Vehicle {
  drive() {
    return `${this.make} : This is an inheritance example`;
  }
}

let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start()); // Output: "Corolla is a car from Toyota"
console.log(myCar.drive()); // Output: "Toyota : This is an inheritance example"

// ---------------------------
// 6. Encapsulation
// ---------------------------
class BankAccount {
  #balance = 0; // private property

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
console.log(account.getBalance()); // Output: "$ 0"
account.deposit(500);
console.log(account.getBalance()); // Output: "$ 500"

// ---------------------------
// 7. Abstraction
// ---------------------------
class CoffeeMachine {
  start() {
    return `Starting the machine...`;
  }
  brewCoffee() {
    return `Brewing coffee`;
  }

  pressStartButton() {
    // Abstracts internal logic
    let msgOne = this.start();
    let msgTwo = this.brewCoffee();
    return `${msgOne} + ${msgTwo}`;
  }
}

let myMachine = new CoffeeMachine();
console.log(myMachine.pressStartButton());
// Output: "Starting the machine... + Brewing coffee"

// ---------------------------
// 8. Polymorphism
// ---------------------------
class Bird {
  fly() {
    return `Flying....`;
  }
}

class Penguin extends Bird {
  fly() {
    return `Penguins can't fly`;
  }
}

let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly()); // Output: "Flying...."
console.log(penguin.fly()); // Output: "Penguins can't fly"

// ---------------------------
// 9. Static Methods
// ---------------------------
class Calculator {
  static add(a, b) {
    return a + b;
  }
}

console.log(Calculator.add(2, 3)); // Output: 5

// ---------------------------
// 10. Getters and Setters
// ---------------------------
class Employee {
  #salary; // private property

  constructor(name, salary) {
    if (salary < 0) throw new Error("Salary cannot be negative");
    this.name = name;
    this.#salary = salary;
  }

  get salary() {
    return `You are not allowed to see salary`;
  }

  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value; // store new value
    }
  }
}

let emp = new Employee("Alice", 50000);
console.log(emp.salary); // Output: "You are not allowed to see salary"
emp.salary = 60000;
console.log(emp._salary); // Output: 60000
