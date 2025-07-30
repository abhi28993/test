// Question: Sum the absolute values of all elements in an array.
// Write a function that returns the sum of the absolute values of all numbers.
// Generated: 2025-07-16

function sumAbsolute(arr) {
  // Solution:
  return arr.reduce((sum, x) => sum + Math.abs(x), 0);
}

// Example:
console.log(sumAbsolute([-1, 2, -3])); // 6 