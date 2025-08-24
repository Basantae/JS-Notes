// 🌟 Prototype-based Inheritance in JavaScript
// --------------------------------------------
// JavaScript uses prototype-based inheritance, meaning objects can inherit 
// properties and methods from other objects through their prototype chain.

// Constructor function to create Person objects
function Person(name) {
  this.name = name; // each instance gets its own name property
}

// Adding a method to the prototype
// All instances of Person will share this method
Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

// Create an instance of Person
let bashanta = new Person("bashanta");

// Call the shared greet method
bashanta.greet(); // Output: "Hello, my name is bashanta"

// 🔑 Notes & Tips:
// 1. Methods added to the prototype are shared across all instances, 
//    saving memory compared to defining them inside the constructor.
// 2. Prototype inheritance allows extending objects without modifying the original constructor.
// 3. You can access the prototype of an object using Object.getPrototypeOf(obj).
// 4. Useful for creating a hierarchy of objects (like classes in other languages) 
//    before ES6 classes were introduced.
