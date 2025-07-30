// Question: Find the number of unique elements in an array.
// Write a function that returns the count of unique elements.

function uniqueLength(arr) {
  // Solution:
  return new Set(arr).size;
}

// Example:
console.log(uniqueLength([1, 2, 2, 3, 4, 4, 5])); // 5 