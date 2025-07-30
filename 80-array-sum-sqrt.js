// Question: Sum the square roots of all elements in an array.
// Write a function that returns the sum of the square roots of all numbers.
// Generated: 2025-07-16

function sumSqrt(arr) {
  // Solution:
  return arr.reduce((sum, x) => sum + Math.sqrt(x), 0);
}

// Example:
console.log(sumSqrt([1, 4, 9])); // 6 