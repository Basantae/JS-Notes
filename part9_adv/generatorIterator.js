// 🌟 Exploring Generators in JavaScript
// ------------------------------------

// Generator function definition using function*
function* numberGenerator() {
  yield 1; // pause and return 1
  yield 2; // pause and return 2
  yield 3; // pause and return 3
}

// Create generator instances
let gen = numberGenerator();
let genTwo = numberGenerator();

// Calling next() executes until the next yield
// Returns an object: { value: <yielded value>, done: <boolean> }

// First generator instance
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // undefined, generator is exhausted

// Second generator instance is independent
console.log(genTwo.next().value); // 1
console.log(genTwo.next().value); // 2
