// Question: Fill an array with a specific value.
// Write a function that returns a new array of given length filled with the given value.

function fillArray(length, value) {
  // Solution:
  return Array(length).fill(value);
}

// Example:
console.log(fillArray(4, 7)); // [7, 7, 7, 7] 