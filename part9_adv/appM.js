// 🌟 Importing Modules in JavaScript (ESM)
// ------------------------------------------
// In modern JavaScript, we can use ES Modules with `import` and `export`.
// This allows splitting code into multiple files for better organization.

// 1️⃣ Default Import
// - "multiply" is the default export from mathOperationsM.js
import multiply from "./mathOperationsM.js";

// 2️⃣ Named Import
// - "add" and "subtract" are named exports from mathOperationsM.js
// - We use curly braces `{ }` to grab specific functions
import { add, subtract } from "./mathOperationsM.js";

// 3️⃣ Using the imported functions
// - multiply(2, 2) → multiplies numbers (2 * 2 = 4)
// - add(2, 2) → adds numbers (2 + 2 = 4)
console.log(multiply(2, 2)); // Output: 4
console.log(add(2, 2));      // Output: 4

// subtract(5, 2) would also work here if we call it
