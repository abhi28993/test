// Question: Get a slice of an array using negative indices.
// Write a function that returns a slice from start to end (can be negative).
// Generated: 2025-07-16

function sliceNegative(arr, start, end) {
  // Solution:
  return arr.slice(start, end);
}

// Example:
console.log(sliceNegative([1, 2, 3, 4, 5], -3, -1)); // [3, 4] 