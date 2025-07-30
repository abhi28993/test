// Question: Remove all negative numbers from an array.
// Write a function that returns a new array with all negative numbers removed.

function removeNegative(arr) {
  // Solution:
  return arr.filter(x => x >= 0);
}

// Example:
console.log(removeNegative([-1, 2, 3, -4, 5])); // [2, 3, 5] 