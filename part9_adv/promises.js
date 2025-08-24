// 🌟 Working with Promises in JavaScript
// --------------------------------------
// Promises represent asynchronous operations that may complete in the future.
// A Promise can be in one of three states:
// 1. Pending: initial state, not fulfilled or rejected
// 2. Fulfilled: operation completed successfully
// 3. Rejected: operation failed

// Example: Simulate fetching data asynchronously
function fetchData() {
  return new Promise((resolve, reject) => {
    // setTimeout simulates a delay (e.g., fetching from server)
    setTimeout(() => {
      let success = true; // simulate success/failure
      if (success) {
        resolve("Data fetched successfully"); // fulfilled state
      } else {
        reject("Error fetching data"); // rejected state
      }
    }, 3000); // 3-second delay
  });
}

// Using the Promise
fetchData()
  .then((data) => {
    // .then() runs when the Promise is fulfilled
    console.log(data); // output: "Data fetched successfully"
    return data.toLowerCase(); // can chain another value for next .then()
  })
  .then((value) => {
    console.log(value); // output: "data fetched successfully"
  })
  .catch((error) => {
    // .catch() runs if the Promise is rejected
    console.error(error); // output: "Error fetching data" if success = false
  });

// 🔑 Notes & Tips:
// 1. Promises help avoid "callback hell" and make async code more readable.
// 2. Always handle errors using .catch() to avoid unhandled rejections.
// 3. You can chain multiple .then() calls to process data step by step.
// 4. `resolve()` passes th
