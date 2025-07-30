// Question: Remove all occurrences of a specific element from an array.
// Write a function that returns a new array with all instances of the value removed.

function removeElement(arr, value) {
  // Solution:
  return arr.filter(x => x !== value);
}

// Example:
console.log(removeElement([1, 2, 3, 2, 4], 2)); // [1, 3, 4] 