// 🌟 Async/Await with Promises in JavaScript
// ------------------------------------------
// This example shows how to handle asynchronous code using `async/await`.
// We'll simulate fetching user data from a server.

// ✅ A function that returns a Promise
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Instead of resolving, we are REJECTING the Promise
      // Normally you'd use `resolve({ ... })` for success
      reject({ name: "bashanta", url: "http://bashantarokaha.com.np/" });
    }, 3000); // simulate 3 second network delay
  });
}

// ✅ Async function to handle the Promise
async function getUserData() {
  try {
    console.log("Fetching user data...");

    // `await` pauses execution until fetchUserData() settles
    const userData = await fetchUserData();

    // If resolved, this line will run
    console.log("User data fetched successfully");
    console.log("User data: ", userData);

  } catch (error) {
    // If rejected, execution jumps here
    console.log("Error fetching data", error);
  }
}

// Call the async function
getUserData();
