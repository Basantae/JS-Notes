// part-3: Conditions & Challenges
// Using if-else to make decisions based on values

// 1. Checking if a number is greater than another number
let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else {
  console.log("num1 is NOT greater");
}

// 2. Checking if a string is equal to another string
let username = "Bashanta";
let anotherUsername = "Bashanta";

if (username == anotherUsername) {
  console.log("Pick another username");
} else {
  console.log("You can pick this username");
}

// 3. Checking if a variable is a number
let score = "44";

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No, that is not a number");
}

// 4. Checking a boolean value
let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is NOT ready");
}

// 5. Checking if an array is empty
let items = ["myItem"];

console.log(items.length);

if (items.length === 0) {
  console.log("Array is empty");
} else {
  console.log("Array is NOT empty");
}
