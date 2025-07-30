// Question: Remove the first element from an array.
// Write a function that returns a new array without the first element.

function removeFirst(arr) {
  // Solution:
  return arr.slice(1);
}

// Example:
console.log(removeFirst([1, 2, 3, 4])); // [2, 3, 4] 