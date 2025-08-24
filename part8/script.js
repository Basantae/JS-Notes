// VARIABLES
document.getElementById("changeVar").addEventListener("click", () => {
  let message = "Hello World 🌍";
  document.getElementById("varExample").textContent = message;
});

// DATA TYPES
document.getElementById("showTypes").addEventListener("click", () => {
  let num = 42;
  let str = "JavaScript";
  let bool = true;
  let undef;
  let nul = null;
  let arr = [1, 2, 3];
  let obj = { name: "JS" };

  let output = `
Number: ${typeof num}
String: ${typeof str}
Boolean: ${typeof bool}
Undefined: ${typeof undef}
Null: object (quirk)
Array: object
Object: object
`;
  document.getElementById("typeOutput").textContent = output;
});

// FUNCTIONS
function greet(name) {
  return `Hello, ${name}!`;
}
document.getElementById("runFunction").addEventListener("click", () => {
  document.getElementById("functionOutput").textContent = greet("Learner");
});

// OBJECTS & OOP
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    return `${this.make} ${this.model} is driving 🚗`;
  }
}
document.getElementById("showObject").addEventListener("click", () => {
  let myCar = new Car("Tesla", "Model 3");
  document.getElementById("objectOutput").textContent = myCar.drive();
});

// ARRAYS
document.getElementById("arrayDemo").addEventListener("click", () => {
  let numbers = [1, 2, 3, 4, 5];
  let doubled = numbers.map(n => n * 2);
  let even = numbers.filter(n => n % 2 === 0);
  let sum = numbers.reduce((a, b) => a + b, 0);

  document.getElementById("arrayOutput").textContent = `
Original: [${numbers}]
Doubled: [${doubled}]
Even: [${even}]
Sum: ${sum}
`;
});

// DOM
document.getElementById("changeDom").addEventListener("click", () => {
  document.getElementById("domText").textContent = "DOM Updated! 🎉";
});

// EVENTS
document.getElementById("eventButton").addEventListener("click", () => {
  document.getElementById("eventOutput").textContent = "Button Clicked ✅";
});

// ASYNC
document.getElementById("fetchData").addEventListener("click", async () => {
  document.getElementById("apiOutput").textContent = "Fetching...";
  // Fake API with Promise
  let fakeAPI = new Promise(resolve => {
    setTimeout(() => resolve({ user: "John", age: 25 }), 1500);
  });
  let data = await fakeAPI;
  document.getElementById("apiOutput").textContent = JSON.stringify(data, null, 2);
});

// ES6 FEATURES
document.getElementById("es6Demo").addEventListener("click", () => {
  let person = { name: "Alice", age: 22 };
  let { name, age } = person; // Destructuring
  let arr = [1, 2, 3];
  let newArr = [...arr, 4, 5]; // Spread

  document.getElementById("es6Output").textContent = `
Destructuring: Name = ${name}, Age = ${age}
Spread: [${newArr}]
Template Literal: Hello, ${name}! 🎈
`;
});
