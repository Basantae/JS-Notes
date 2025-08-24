// 🌟 Importing and Using a Module in Node.js
// -------------------------------------------
// Node.js allows us to split code into multiple files (modules)
// and reuse them by importing with `require()`.

// 1️⃣ Import the file "mathOperationsC.js"
// - require("./mathOperationsC.js") loads the module
// - whatever that file exports is stored inside `mathOperations`
const mathOperations = require("./mathOperationsC.js");

// 2️⃣ Use the function `add` from mathOperations
// - Here we call mathOperations.add(2, 2)
// - This adds the two numbers together (2 + 2 = 4)
console.log(mathOperations.add(2, 2)); 

// 🟢 Output: 4
