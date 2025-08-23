// part-2: Non-Primitive JS
// Non-primitive types are objects that can store multiple values
// and have properties or methods. Examples: Object, Array, Date

// Object example
const username = {
  "first name": "Bashanta",
  isLoggedin: true,
};

// updating object properties
username.lastname = "Rokaha";

// accessing object properties
// console.log(username["first name"]);
// console.log(username.lastname);
// console.log(username);
// console.log(typeof username);  // object

// Date example
let today = new Date();
// console.log(today.getDate()); // prints current date

// Array example
let anotherUser = ["Bashanta", true];
// console.log(anotherUser[0]); // prints "Bashanta"

// Converting strings to numbers
let isValue = "2abc";
console.log(typeof Number(isValue)); // prints "number" but results in NaN

console.log(Number(null));           // prints 0
