// 🌟 Understanding `this`, bind, call, and apply in JavaScript
// ------------------------------------------------------------

// Create a person object with a name and a greet method
const person = {
  name: "Bashanta",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

// ✅ Calling the method directly works as expected
person.greet(); // Output: "Hi, I am Bashanta"

// ⚠️ Assigning the method to a variable loses the original context
const greetFunction = person.greet;
greetFunction(); // Output: undefined (or empty), because `this` is now global/window

// 🔧 Using `bind` to permanently bind a new context
const boundGreet = person.greet.bind({ name: "John" });
boundGreet(); // Output: "Hi, I am John"

// 🔧 Using `call` to invoke the function immediately with a specific context
person.greet.call({ name: "Alice" }); // Output: "Hi, I am Alice"

// 🔧 Using `apply` works like `call` but takes arguments as an array
// (here no extra arguments, but pattern remains the same)
person.greet.apply({ name: "Mark" }); // Output: "Hi, I am Mark"

// 💡 Notes & Tips:
// 1. `this` refers to the object that is executing the function.
// 2. `bind` returns a new function with `this` permanently set.
// 3. `call` invokes the function immediately with a given `this` context.
// 4. `apply` is similar to `call` but passes arguments as an array.
// 5. Useful when borrowing methods from other objects or controlling context.
