// Question: Sum all elements except specific values in an array.
// Write a function that returns the sum of all elements except those in the values array.
// Generated: 2025-07-16

function sumExceptValues(arr, values) {
  // Solution:
  return arr.filter(x => !values.includes(x)).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumExceptValues([1, 2, 3, 4, 5], [2, 4])); // 9 