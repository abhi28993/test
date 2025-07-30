// Question: Sum elements between two values in an array.
// Write a function that returns the sum of elements between min and max values (inclusive).
// Generated: 2025-07-16

function sumBetweenValues(arr, min, max) {
  // Solution:
  return arr.filter(x => x >= min && x <= max).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumBetweenValues([1, 2, 3, 4, 5], 2, 4)); // 9 