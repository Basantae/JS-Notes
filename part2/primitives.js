// part-1: Primitive JS
// Primitive types are basic data types that store single values.
// Examples: Number, Boolean, String, Null, Undefined, Symbol

// Number
let balance = 120;
let anotherBalance = new Number(120); // not commonly used

// console.log(balance);              
// console.log(anotherBalance.valueOf()); // get actual number value
// console.log(typeof balance);       // "number"
// console.log(typeof anotherBalance);// "object"

// Boolean
let isActive = true;
let isReallyActive = new Boolean(true); // not recommended

// Null and Undefined
let firstname = null;
let lastname = undefined;
// console.log(firstname);  
// console.log(lastname);  

// String
let myString = "hello";
let myStringOne = "Hola";
let username = "Bashanta";

let oldGreet = myString + " " + username;
// console.log(oldGreet);

let greetMessage = `Hello ${username} !`;
let demoOne = `Value is ${2 * 2}`;
// console.log(demoOne);

// Symbol (unique identifiers)
let sm1 = Symbol("Bashanta");
let sm2 = Symbol("Bashanta");

console.log(sm1); // each symbol is unique
