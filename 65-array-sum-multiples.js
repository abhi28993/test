// Question: Sum all multiples of a given number in an array.
// Write a function that returns the sum of all elements that are multiples of n.
// Generated: 2025-07-16

function sumMultiples(arr, n) {
  // Solution:
  return arr.filter(x => x % n === 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumMultiples([1, 2, 3, 4, 5, 6], 2)); // 12 