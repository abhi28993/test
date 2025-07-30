// Question: Find the index of the last occurrence of a value in an array.
// Write a function that returns the last index, or -1 if not found.

function lastIndex(arr, value) {
  // Solution:
  return arr.lastIndexOf(value);
}

// Example:
console.log(lastIndex([1, 2, 3, 2, 4], 2)); // 3
console.log(lastIndex([1, 2, 3], 5)); // -1 