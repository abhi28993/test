// Question: Find the index of the minimum value in an array.
// Write a function that returns the index of the minimum value in the array.

function minIndex(arr) {
  // Solution:
  return arr.indexOf(Math.min(...arr));
}

// Example:
console.log(minIndex([1, 5, 2, 9, 3])); // 0 