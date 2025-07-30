// Question: Remove all null values from an array.
// Write a function that returns a new array with all null values removed.

function removeNull(arr) {
  // Solution:
  return arr.filter(x => x !== null);
}

// Example:
console.log(removeNull([1, null, 2, null, 3])); // [1, 2, 3] 