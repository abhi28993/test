// Question: Sum all positive numbers in an array.
// Write a function that returns the sum of all positive numbers.

function sumPositive(arr) {
  // Solution:
  return arr.filter(x => x > 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumPositive([-1, 2, 3, -4, 5])); // 10 