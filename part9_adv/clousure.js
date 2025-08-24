// 🌟 JavaScript Closures
// ----------------------
// A closure is a function that "remembers" the variables from its outer scope
// even after the outer function has finished executing.

// Outer function
function outer() {
  // `counter` is local to `outer` but will be remembered by the inner function
  let counter = 4;

  // Inner function forms a closure over `counter`
  return function () {
    counter++; // Increment counter each time inner function is called
    return counter; // Return the updated value
  };
}

// `increment` now holds the inner function returned by `outer`
let increment = outer();

// Calling the closure multiple times demonstrates that it "remembers" the counter
console.log(increment()); // Output: 5  (4 + 1)
console.log(increment()); // Output: 6  (previous 5 + 1)
console.log(increment()); // Output: 7  (previous 6 + 1)
