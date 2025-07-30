// Question: Sum all elements divided by a factor in an array.
// Write a function that returns the sum of all elements divided by n.
// Generated: 2025-07-16

function sumDivided(arr, n) {
  // Solution:
  return arr.reduce((sum, x) => sum + x / n, 0);
}

// Example:
console.log(sumDivided([2, 4, 6], 2)); // 6 