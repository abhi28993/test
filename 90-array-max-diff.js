// Question: Find the maximum difference between any two elements in an array.
// Write a function that returns the largest difference (max - min).
// Generated: 2025-07-16

function maxDifference(arr) {
  // Solution:
  return Math.max(...arr) - Math.min(...arr);
}

// Example:
console.log(maxDifference([1, 2, 3, 10])); // 9 