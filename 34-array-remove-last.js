// Question: Remove the last element from an array.
// Write a function that returns a new array without the last element.

function removeLast(arr) {
  // Solution:
  return arr.slice(0, -1);
}

// Example:
console.log(removeLast([1, 2, 3, 4])); // [1, 2, 3] 