// part-4: Array Challenges 

// 1. Access the first element of an array
let projects = ["Portfolio Website", "E-commerce Site", "AI Chatbot"];
const firstProject = projects[0];

// 2. Access the third element in an array
let cities = ["Pokhara", "Berlin", "Munich", "Hamburg"];
const favoriteCity = cities[2];

// 3. Update an element in an array
let hobbies = ["cricket", "video editing", "coding"];
hobbies[1] = "trekking";

// 4. Add a new element to an array
let countriesVisited = ["Nepal", "Germany"];
countriesVisited.push("France");

// 5. Remove the last element from an array
let courses = ["BSc Computing", "AI Basics", "German B1", "Web Dev"];
const lastCourse = courses.pop();

// 6. Soft copy of an array (reference copy)
let skills = ["Python", "JavaScript", "Java"];
let softCopySkills = skills;
skills.pop();  // affects softCopySkills too

// 7. Hard copy of an array (independent copy)
let favoriteCities = ["Pokhara", "Munich", "Berlin"];
let hardCopyCities = [...favoriteCities];
favoriteCities.pop();  // does NOT affect hardCopyCities

// 8. Merge two arrays
let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let allCities = europeanCities.concat(asianCities);
console.log(allCities);

// 9. Find array length
let myProjects = ["Portfolio Website", "E-commerce Site", "AI Chatbot", "Blog"];
let totalProjects = myProjects.length;

// 10. Check if an array includes a value
let bucketCities = ["Kyoto", "Berlin", "Pokhara", "Hamburg"];
let isBerlinInList = bucketCities.includes("Berlin");
