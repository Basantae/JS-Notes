// 🌟 mathOperationsM.js
// ----------------------
// This module defines basic math operations and exports them using ES6 Module syntax.
// ES6 modules can be imported using `import` statements in other files.

// Named export: add two numbers
export function add(a, b) {
  return a + b; // returns the sum of a and b
}

// Named export: subtract one number from another
export function subtract(a, b) {
  return a - b; // returns the difference (a - b)
}

// Default export: multiply two numbers
export default function multiply(a, b) {
  return a * b; // returns the product of a and b
}

// 🔑 Notes:
// 1. Named exports can be imported using curly braces {}:
//      import { add, subtract } from './mathOperationsM.js';
// 2. Default export can be imported without braces and can be renamed:
//      import multiply from './mathOperationsM.js';
// 3. You can combine both named and default imports:
//      import multiply, { add, subtract } from './mathOperationsM.js';
// 4. ES Modules require either:
//    - running in a browser environment with type="module" in <script>
//    - or Node.js with `"type": "module"` in package.json
