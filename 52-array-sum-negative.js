// Question: Sum all negative numbers in an array.
// Write a function that returns the sum of all negative numbers.

function sumNegative(arr) {
  // Solution:
  return arr.filter(x => x < 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumNegative([-1, 2, 3, -4, 5])); // -5 