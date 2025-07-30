// Question: Sum all elements divisible by a given number in an array.
// Write a function that returns the sum of all elements divisible by n.
// Generated: 2025-07-16

function sumDivisible(arr, n) {
  // Solution:
  return arr.filter(x => x % n === 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumDivisible([1, 2, 3, 4, 5, 6], 3)); // 9 