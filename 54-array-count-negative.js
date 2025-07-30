// Question: Count the number of negative numbers in an array.
// Write a function that returns the count of negative numbers.

function countNegative(arr) {
  // Solution:
  return arr.filter(x => x < 0).length;
}

// Example:
console.log(countNegative([-1, 2, 3, -4, 5])); // 2 