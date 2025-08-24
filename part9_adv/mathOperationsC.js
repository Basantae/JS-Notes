// 🌟 mathOperationsC.js
// ----------------------
// This module defines basic math operations and exports them as named exports
// for use in other JavaScript files using CommonJS syntax (Node.js).

// Function to add two numbers
function add(a, b) {
  return a + b; // returns the sum of a and b
}

// Function to subtract one number from another
function subtract(a, b) {
  return a - b; // returns the difference (a - b)
}

// Function to multiply two numbers
function multiply(a, b) {
  return a * b; // returns the product of a and b
}

// Exporting all functions so other files can import and use them
module.exports = {
  add,
  subtract,
  multiply,
};

// 🔑 Notes:
// 1. `module.exports` is used in Node.js to export functions or objects.
// 2. Named export style allows you to import specific functions in another file.
// 3. These functions can be imported like this:
//    const mathOperations = require('./mathOperationsC.js');
//    mathOperations.add(2, 3); // 5
