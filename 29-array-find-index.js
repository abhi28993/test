// Question: Find the index of the first occurrence of a value in an array.
// Write a function that returns the index, or -1 if not found.

function findIndex(arr, value) {
  // Solution:
  return arr.indexOf(value);
}

// Example:
console.log(findIndex([1, 2, 3, 2, 4], 2)); // 1
console.log(findIndex([1, 2, 3], 5)); // -1 