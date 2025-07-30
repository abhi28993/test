// Question: Return a sorted array of unique elements.
// Write a function that returns a sorted array with duplicates removed.

function uniqueSorted(arr) {
  // Solution:
  return [...new Set(arr)].sort((a, b) => a - b);
}

// Example:
console.log(uniqueSorted([3, 1, 2, 3, 2, 1])); // [1, 2, 3] 