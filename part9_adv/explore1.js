// 🌟 Exploring Functions & Async Behavior
// ---------------------------------------

// A simple function declaration
function sayHello() {
  console.log("I would like to say Hello");
}

// setTimeout schedules the function to run after 4000ms (4 seconds)
// This demonstrates asynchronous behavior
setTimeout(() => {
  sayHello(); // Executes after 4 seconds
}, 4000);

// This runs immediately, before the setTimeout callback
console.log("chaicode");

// A regular synchronous for loop
// Executes immediately after the console.log above
for (let index = 0; index < 10; index++) {
  console.log(index);
}
