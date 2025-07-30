// Question: Check if any element in an array is negative.
// Write a function that returns true if any element is negative, false otherwise.

function anyNegative(arr) {
  // Solution:
  return arr.some(x => x < 0);
}

// Example:
console.log(anyNegative([1, 2, 3])); // false
console.log(anyNegative([1, -2, 3])); // true 