// Question: Check if all elements in an array are equal.
// Write a function that returns true if all elements are the same, false otherwise.

function allEqual(arr) {
  // Solution:
  return arr.every(x => x === arr[0]);
}

// Example:
console.log(allEqual([2, 2, 2])); // true
console.log(allEqual([2, 3, 2])); // false 