// ===========================
// Part-8: Constructor Functions & Prototypes
// ===========================

// Constructor functions are special functions used to create objects with similar properties.
// Convention: Function names start with a capital letter.
// Workflow: Use 'new' keyword → creates a new object → 'this' refers to that object.

// 1. Basic Constructor Function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person("Alex", 25);
console.log("Person object:", person1);
// Output: { name: "Alex", age: 25 }

// 2. Another example with Car
function Car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("Toyota", "Camry");
console.log("My car:", myCar);
// Output: { make: "Toyota", model: "Camry" }

// Calling without 'new' does NOT create a new object properly
let myNewCar = Car("Tata", "Safari"); 
console.log("Without new keyword:", myNewCar);
// Output: undefined (Car function returns nothing, 'this' is global or error in strict mode)

// 3. Constructor with methods
function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `This is a cup of ${this.type}`;
  };
}

let lemonTea = new Tea("lemon tea");
console.log(lemonTea.describe());
// Output: "This is a cup of lemon tea"

// 4. Using Prototype to add shared methods
function Animal(species) {
  this.species = species;
}

// Prototype method: shared among all instances
Animal.prototype.sound = function () {
  return `${this.species} makes a sound`;
};

let dog = new Animal("Dog");
console.log(dog.sound());
// Output: "Dog makes a sound"

let cat = new Animal("Cat");
console.log(cat.sound());
// Output: "Cat makes a sound"

// 5. Ensuring 'new' keyword is used
function Drink(name) {
  if (!new.target) {
    throw new Error("Drink must be called with new keyword");
  }
  this.name = name;
}

let tea = new Drink("Tea");
console.log("Drink created:", tea);
// Output: { name: "Tea" }

// Uncommenting below will throw an error because 'new' is missing
// let coffee = Drink("Coffee");
