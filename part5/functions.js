// ===========================
// Part-7: Functions in JavaScript
// ===========================

// Functions are reusable blocks of code that perform a task or return a value.
// Types: normal functions, nested functions, arrow functions, higher-order functions.

// 1. Basic Function
// Definition: A function that takes an input and returns a message.
// Workflow: Call function with a string → returns formatted string
function makeDrink(drinkType) {
  return `Making ${drinkType}`;
}

let drinkOrder = makeDrink("lemon water");
console.log("Drink order:", drinkOrder);
// Output: "Making lemon water"

// 2. Nested Function
// Definition: A function inside another function
// Workflow: Outer function calls inner function → inner function returns confirmation message
function orderDrink(drinkType) {
  function confirmOrder() {
    return `Order confirmed for ${drinkType}`;
  }
  return confirmOrder();
}

let orderConfirmation = orderDrink("orange juice");
console.log(orderConfirmation);
// Output: "Order confirmed for orange juice"

// 3. Arrow Function
// Definition: Short syntax for writing functions, especially for single expressions
// Workflow: Call function with price and quantity → returns total cost
const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(499, 2);
console.log("Total cost:", totalCost);
// Output: 998

// 4. Function as Parameter (Higher-Order Function)
// Definition: Functions can be passed as arguments to other functions
// Workflow: Pass function → call inside another function → return result
function serveDrink(drinkType) {
  return `Serving ${drinkType}`;
}

function processOrder(drinkFunction) {
  return drinkFunction("iced tea");
}

let processedOrder = processOrder(serveDrink);
console.log(processedOrder);
// Output: "Serving iced tea"

// 5. Function Returning Function (Closure)
// Definition: A function can return another function; useful for creating reusable templates
// Workflow: Call outer function → returns inner function → call inner function with parameter
function createDrinkMaker(customerName) {
  let baseScore = 100;
  return function (drinkType) {
    return `Making ${drinkType} for ${customerName} (score: ${baseScore})`;
  };
}

let drinkMaker = createDrinkMaker("Alex");
let result = drinkMaker("green smoothie");
console.log(result);
// Output: "Making green smoothie for Alex (score: 100)"
