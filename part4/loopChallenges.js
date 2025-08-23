// ===========================
// Part-6: While and Do-While Loops
// ===========================

// Loops let us repeat code efficiently.
// While loop: checks condition before executing the block.
// Do-while loop: executes at least once before checking the condition.

// 1. While loop: sum numbers from 1 to 5
// Workflow: keep adding current number to sum until i > 5
let sum = 0;
let i = 1;

while (i <= 5) {
  sum += i; // sum = sum + i
  i++;
}
console.log("Sum of numbers from 1 to 5:", sum);
// Output: 15

// 2. While loop: countdown from 5 to 1
// Workflow: push current number to array, decrease number each iteration
let countdown = [];
let j = 5;

while (j > 0) {
  countdown.push(j);
  j--;
}
console.log("Countdown array:", countdown);
// Output: [5, 4, 3, 2, 1]

// 3. Do-while loop example (simulated input collection)
// Note: prompt is commented out to avoid blocking execution in notes
let inputCollection = [];
let input;

// do {
//   input = prompt(`Enter a value (type "stop" to finish)`);
//   if (input !== "stop") {
//     inputCollection.push(input);
//   }
// } while (input !== "stop");

// 4. Do-while loop: sum numbers from 1 to 3
// Workflow: always executes at least once, adds numbers to total
let total = 0;
let k = 1;

do {
  total += k;
  k++;
} while (k <= 3);
console.log("Total sum from 1 to 3:", total);
// Output: 6

// 5. For loop: multiply each element in array by 2
// Workflow: iterate array, multiply each element, store in new array
let multipliedNumbers = [];
let numbers = [2, 4, 6];

for (let l = 0; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2);
}
console.log("Numbers multiplied by 2:", multipliedNumbers);
// Output: [4, 8, 12]

// 6. For loop: copy all cities to a new array
// Workflow: iterate original array, push each element to new array
let cities = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];

for (let c = 0; c < cities.length; c++) {
  const myCity = cities[c];
  cityList.push(myCity);
}
console.log("Copied city list:", cityList);
// Output: ["Paris", "New York", "Tokyo", "London"]
