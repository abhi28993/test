// Question: Remove an element from an array by index.
// Write a function that returns a new array with the element at the given index removed.

function removeAtIndex(arr, index) {
  // Solution:
  return arr.slice(0, index).concat(arr.slice(index + 1));
}

// Example:
console.log(removeAtIndex([1, 2, 3, 4], 2)); // [1, 2, 4] 