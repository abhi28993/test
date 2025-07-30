// Question: Halve each element in an array.
// Write a function that returns a new array with each element halved.

function halfArray(arr) {
  // Solution:
  return arr.map(x => x / 2);
}

// Example:
console.log(halfArray([2, 4, 6])); // [1, 2, 3] 