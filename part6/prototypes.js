// ===========================
// prototype.js - JavaScript Prototypes
// ===========================

// In JavaScript, **prototypes** allow objects to inherit properties and methods from other objects.
// This helps avoid duplication and creates a prototype chain.

// ---------------------------
// 1. Simple prototype inheritance
// ---------------------------
let computer = { cpu: 12 }; // Base object with CPU property

let lenovo = {
  screen: "HD",
  __proto__: computer, // lenovo inherits from computer
};

let tomHardware = {}; // An empty object, no inheritance

console.log(`lenovo `, lenovo.__proto__);
// Output: { cpu: 12 } → Shows lenovo inherits cpu from computer

// ---------------------------
// 2. Using Object.setPrototypeOf
// ---------------------------
let genericCar = { tyres: 4 }; // Base object with tyres property

let tesla = {
  driver: "AI", // Tesla has its own property
};

// Set genericCar as prototype of tesla
Object.setPrototypeOf(tesla, genericCar);

console.log(`tesla `, Object.getPrototypeOf(tesla));
// Output: { tyres: 4 } → Tesla inherits tyres from genericCar

// ---------------------------
// Key Notes:
// ---------------------------
// 1. __proto__ and Object.setPrototypeOf() allow you to link objects, creating inheritance.
// 2. Prototypes form a chain: if a property is not found in an object, JS looks up its prototype.
// 3. Useful for sharing methods or properties without duplicating code.
// ---------------------------

// Example workflow:
// - Create a base object with shared properties.
// - Create a new object and set its prototype to the base object.
// - Access inherited properties directly from the new object.
console.log(tesla.tyres); // Output: 4 (inherited from genericCar)
console.log(lenovo.cpu);  // Output: 12 (inherited from computer)
