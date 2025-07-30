// Question: Remove duplicates from an array.
// Write a function that returns a new array with duplicates removed.

function removeDuplicates(arr) {
  // Solution:
  return [...new Set(arr)];
}

// Example:
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5] 