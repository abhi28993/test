// Question: Remove all zeros from an array.
// Write a function that returns a new array with all zeros removed.

function removeZero(arr) {
  // Solution:
  return arr.filter(x => x !== 0);
}

// Example:
console.log(removeZero([0, 1, 0, 2, 3, 0])); // [1, 2, 3] 