// Logical operators in JS

let isLoggedin = true;
let isPaid = true;

// check if both logged in and paid
console.log(isLoggedin && isPaid);  // true, because both are true

let isEmailUser = true;
let isGoogleUser = false;

// check if either email or google user
console.log(isEmailUser || isGoogleUser);  // true, at least one is true

// Example with NOT (!)
let isAdmin = false;
console.log(!isAdmin);  // true, because isAdmin is false
