// Question: Sum elements at odd indices in an array.
// Write a function that returns the sum of elements at odd indices.

function sumOddIndex(arr) {
  // Solution:
  return arr.filter((_, i) => i % 2 !== 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumOddIndex([1, 2, 3, 4, 5])); // 6 