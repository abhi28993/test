// Question: Sum elements between two indices in an array.
// Write a function that returns the sum of elements from index start to end (inclusive).
// Generated: 2025-07-16

function sumBetween(arr, start, end) {
  // Solution:
  return arr.slice(start, end + 1).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumBetween([1, 2, 3, 4, 5], 1, 3)); // 9 