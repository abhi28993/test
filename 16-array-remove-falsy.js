// Question: Remove all falsy values from an array.
// Write a function that returns a new array with all falsy values removed.

function removeFalsy(arr) {
  // Solution:
  return arr.filter(Boolean);
}

// Example:
console.log(removeFalsy([0, 1, false, 2, '', 3, null, undefined])); // [1, 2, 3] 