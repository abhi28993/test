// Question: Sum all elements except at a specific index in an array.
// Write a function that returns the sum of all elements except at the given index.
// Generated: 2025-07-16

function sumExceptIndex(arr, index) {
  // Solution:
  return arr.filter((_, i) => i !== index).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumExceptIndex([1, 2, 3, 4], 2)); // 7 