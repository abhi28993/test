// Question: Count the occurrences of a value in an array.
// Write a function that returns the number of times a value appears in the array.

function countOccurrences(arr, value) {
  // Solution:
  return arr.filter(x => x === value).length;
}

// Example:
console.log(countOccurrences([1, 2, 2, 3, 2, 4], 2)); // 3 