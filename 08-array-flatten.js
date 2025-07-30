// Question: Flatten a nested array.
// Write a function that flattens a nested array into a single array.

function flattenArray(arr) {
  // Solution:
  return arr.flat(Infinity);
}

// Example:
console.log(flattenArray([1, [2, [3, 4], 5]])); // [1, 2, 3, 4, 5] 