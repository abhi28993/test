// Question: Sum all elements in an array.
// Write a function that returns the sum of all numbers in an array.

function sumArray(arr) {
  // Solution:
  return arr.reduce((sum, num) => sum + num, 0);
}

// Example:
console.log(sumArray([1, 2, 3, 4])); // 10 