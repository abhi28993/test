// Question: Sum all elements except in a given index range in an array.
// Write a function that returns the sum of all elements except those in the range start to end (inclusive).
// Generated: 2025-07-16

function sumExceptRange(arr, start, end) {
  // Solution:
  return arr.filter((_, i) => i < start || i > end).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumExceptRange([1, 2, 3, 4, 5], 1, 3)); // 6 