// 🎮 Playing with Variables in JavaScript
// ---------------------------------------
// Let’s see how `let` and `const` behave differently.


// Using `let` → I can reassign values (flexible, like changing game characters)
let gameName = "spiderman";   // first I pick spiderman 🕷️
gameName = "batman";          // then I switch it up to batman 🦇
console.log(gameName);        // output: batman

// Using `const` → fixed, cannot be reassigned (like my permanent username)
// Once set, it stays locked forever.
const username = "bashantadotcom";  
username = "bashanta";   // ❌ error! not allowed to reassign const
console.log(username);   // this line won’t even run
