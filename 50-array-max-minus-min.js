// Question: Find the difference between the max and min values in an array.
// Write a function that returns the difference between the largest and smallest numbers.

function maxMinusMin(arr) {
  // Solution:
  return Math.max(...arr) - Math.min(...arr);
}

// Example:
console.log(maxMinusMin([1, 2, 3, 10])); // 9 