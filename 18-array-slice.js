// Question: Get a slice of an array from index start to end (not including end).
// Write a function that returns a slice of the array.

function arraySlice(arr, start, end) {
  // Solution:
  return arr.slice(start, end);
}

// Example:
console.log(arraySlice([1, 2, 3, 4, 5], 1, 4)); // [2, 3, 4] 