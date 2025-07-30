// Question: Find the minimum value in an array.
// Write a function that takes an array of numbers and returns the minimum value.

function findMin(arr) {
  // Solution:
  return Math.min(...arr);
}

// Example:
console.log(findMin([1, 5, 2, 9, 3])); // 1 