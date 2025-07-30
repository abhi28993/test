// Question: Count the number of positive numbers in an array.
// Write a function that returns the count of positive numbers.

function countPositive(arr) {
  // Solution:
  return arr.filter(x => x > 0).length;
}

// Example:
console.log(countPositive([-1, 2, 3, -4, 5])); // 3 