// Question: Sum all elements except a specific value in an array.
// Write a function that returns the sum of all elements except the given value.
// Generated: 2025-07-16

function sumExcept(arr, value) {
  // Solution:
  return arr.filter(x => x !== value).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumExcept([1, 2, 3, 2, 4], 2)); // 8 