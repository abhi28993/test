// Question: Find all indices of a value in an array.
// Write a function that returns an array of all indices where the value occurs.

function findAllIndices(arr, value) {
  // Solution:
  return arr.reduce((indices, x, i) => (x === value ? indices.concat(i) : indices), []);
}

// Example:
console.log(findAllIndices([1, 2, 3, 2, 4, 2], 2)); // [1, 3, 5] 