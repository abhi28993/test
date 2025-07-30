// Question: Sum elements at even indices in an array.
// Write a function that returns the sum of elements at even indices.
// Generated: 2025-07-16

function sumEvenIndices(arr) {
  // Solution:
  return arr.filter((_, i) => i % 2 === 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumEvenIndices([1, 2, 3, 4, 5])); // 9 