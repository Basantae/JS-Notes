// ===========================
// Part-5: Loop Challenges
// ===========================

// Loops help us execute a block of code multiple times.
// Types: for, for-of, for-in, forEach
// Keywords: break (stop loop), continue (skip current iteration)

// 1. For loop with break
// Workflow: Iterate over array, stop when "cherry" is found
let items = ["apple", "banana", "cherry", "date"];
let selectedItems = [];

for (let i = 0; i < items.length; i++) {
  if (items[i] === "cherry") break; // stop the loop at "cherry"
  selectedItems.push(items[i]);
}
console.log("Selected items before 'cherry':", selectedItems);
// Output: ["apple", "banana"]

// 2. For loop with continue
// Workflow: Iterate over array, skip "Paris"
let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") continue; // skip Paris
  visitedCities.push(cities[i]);
}
console.log("Visited cities:", visitedCities);
// Output: ["London", "New York", "Berlin"]

// 3. For-of loop with break
// Workflow: Iterate over numbers, stop at 4
let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) break; // stop at 4
  smallNumbers.push(num);
}
console.log("Numbers before 4:", smallNumbers);
// Output: [1, 2, 3]

// 4. For-of loop with continue
// Workflow: Skip "banana" while iterating fruits
let fruits = ["apple", "banana", "mango", "orange"];
let preferredFruits = [];

for (const fruit of fruits) {
  if (fruit === "banana") continue; // skip banana
  preferredFruits.push(fruit);
}
console.log("Preferred fruits:", preferredFruits);
// Output: ["apple", "mango", "orange"]

// 5. For-in loop with break (object)
// Workflow: Loop through object properties, stop at "Berlin"
let cityPopulation = {
  London: 8900000,
  NewYork: 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityPopBeforeBerlin = {};

for (const city in cityPopulation) {
  if (city === "Berlin") break; // stop at Berlin
  cityPopBeforeBerlin[city] = cityPopulation[city];
}
console.log("City populations before Berlin:", cityPopBeforeBerlin);
// Output: {London: 8900000, NewYork: 8400000, Paris: 2200000}

// 6. For-in loop with continue (object)
// Workflow: Skip cities with population < 3 million
let worldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};

for (const city in worldCities) {
  if (worldCities[city] < 3000000) continue; // skip small cities
  largeCities[city] = worldCities[city];
}
console.log("Cities with population >= 3M:", largeCities);
// Output: {Sydney: 5000000, Tokyo: 9000000, Berlin: 3500000}

// 7. forEach loop with simulated break
// Workflow: Stop adding projects when "Chatbot" is found
let projects = ["Website", "App", "Chatbot", "Blog"];
let availableProjects = [];

projects.forEach(function (project) {
  if (project === "Chatbot") return; // skip remaining logic
  availableProjects.push(project);
});
console.log("Available projects before Chatbot:", availableProjects);
// Output: ["Website", "App"]

// 8. forEach loop with simulated continue
// Workflow: Skip "Sydney" while iterating cities
let myCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

myCities.forEach(function (city) {
  if (city === "Sydney") return; // skip Sydney
  traveledCities.push(city);
});
console.log("Traveled cities:", traveledCities);
// Output: ["Berlin", "Tokyo", "Paris"]

// 9. For loop with continue and calculation
// Workflow: Skip 7, double remaining numbers
let nums = [2, 5, 7, 9];
let doubledNumbers = [];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 7) continue; // skip 7
  doubledNumbers.push(nums[i] * 2);
}
console.log("Doubled numbers (skipping 7):", doubledNumbers);
// Output: [4, 10, 18]

// 10. For-of loop with break based on string length
// Workflow: Stop when string length > 7
let names = ["Alice", "Bob", "Charlotte", "Daniel"];
let shortNames = [];

for (const name of names) {
  if (name.length > 7) break; // stop at "Charlotte"
  shortNames.push(name);
}
console.log("Names with length <= 7:", shortNames);
// Output: ["Alice", "Bob"]
