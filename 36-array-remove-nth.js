// Question: Remove the nth element from an array.
// Write a function that returns a new array without the nth element.

function removeNth(arr, n) {
  // Solution:
  return arr.slice(0, n).concat(arr.slice(n + 1));
}

// Example:
console.log(removeNth([1, 2, 3, 4], 2)); // [1, 2, 4] 