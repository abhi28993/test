// Question: Sum the squares of all elements in an array.
// Write a function that returns the sum of the squares of all numbers.

function sumSquares(arr) {
  // Solution:
  return arr.reduce((sum, x) => sum + x * x, 0);
}

// Example:
console.log(sumSquares([1, 2, 3])); // 14 