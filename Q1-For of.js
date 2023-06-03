
const jsonData = {
    "name": "John Doe",
    "age": 25,
    "city": "New York"
  };
  
  // Convert JSON object into an array of key-value pairs
  const entries = Object.entries(jsonData);
  
//   Iterate over the array using a for...of loop
  for (let [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }