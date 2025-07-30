// Question: Sum all elements multiplied by a factor in an array.
// Write a function that returns the sum of all elements multiplied by n.
// Generated: 2025-07-16

function sumMultiplied(arr, n) {
  // Solution:
  return arr.reduce((sum, x) => sum + x * n, 0);
}

// Example:
console.log(sumMultiplied([1, 2, 3], 2)); // 12 