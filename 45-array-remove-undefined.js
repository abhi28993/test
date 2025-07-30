// Question: Remove all undefined values from an array.
// Write a function that returns a new array with all undefined values removed.

function removeUndefined(arr) {
  // Solution:
  return arr.filter(x => x !== undefined);
}

// Example:
console.log(removeUndefined([1, undefined, 2, undefined, 3])); // [1, 2, 3] 