// Question: Sum elements at even indices in an array.
// Write a function that returns the sum of elements at even indices.

function sumEvenIndex(arr) {
  // Solution:
  return arr.filter((_, i) => i % 2 === 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumEvenIndex([1, 2, 3, 4, 5])); // 9 