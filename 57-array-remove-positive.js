// Question: Remove all positive numbers from an array.
// Write a function that returns a new array with all positive numbers removed.

function removePositive(arr) {
  // Solution:
  return arr.filter(x => x <= 0);
}

// Example:
console.log(removePositive([-1, 2, 3, -4, 5])); // [-1, -4] 