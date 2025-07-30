// Question: Find the index of the maximum value in an array.
// Write a function that returns the index of the maximum value in the array.

function maxIndex(arr) {
  // Solution:
  return arr.indexOf(Math.max(...arr));
}

// Example:
console.log(maxIndex([1, 5, 2, 9, 3])); // 3 