// Question: Check if all elements in an array are positive.
// Write a function that returns true if all elements are positive, false otherwise.

function allPositive(arr) {
  // Solution:
  return arr.every(x => x > 0);
}

// Example:
console.log(allPositive([1, 2, 3])); // true
console.log(allPositive([1, -2, 3])); // false 