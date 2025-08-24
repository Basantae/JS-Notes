// 🌟 Fetching Blog Data using Async/Await & Promises
// --------------------------------------------------
// This example demonstrates how to fetch multiple async operations in parallel
// using Promise.all, simulating fetching blog posts and comments from APIs.

// Function to simulate fetching blog posts
function fetchPostData() {
  // Returns a Promise that resolves after 2 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📄 Post Data fetched"); // The resolved value of the Promise
    }, 2000); // Delay of 2000ms (2 seconds)
  });
}

// Function to simulate fetching blog comments
function fetchCommentData() {
  // Returns a Promise that resolves after 3 seconds
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("💬 Comment data fetched."); // The resolved value of the Promise
    }, 3000); // Delay of 3000ms (3 seconds)
  });
}

// Async function to get both blog post and comment data
async function getBlogData() {
  try {
    console.log("⏳ Fetching blog data...");

    // Using Promise.all to fetch both data in parallel
    // - This is faster than awaiting each Promise sequentially
    // - The order of the array matches the order of Promises
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    // Log the results to the console
    console.log(postData);      // Output: 📄 Post Data fetched
    console.log(commentData);   // Output: 💬 Comment data fetched.
    console.log("✅ Fetch complete"); // Indicates all Promises completed successfully

  } catch (error) {
    // If any Promise rejects, it will be caught here
    console.error("❌ Error fetching blog data", error);
  }
}


