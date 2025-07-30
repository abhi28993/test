// Question: Find the minimum sum in a sliding window of size k.
// Write a function that returns the smallest sum of any window of size k.
// Generated: 2025-07-16

function minWindowSum(arr, k) {
  // Solution:
  let min = Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = arr.slice(i, i + k).reduce((a, b) => a + b, 0);
    min = Math.min(min, sum);
  }
  return min;
}

// Example:
console.log(minWindowSum([1, 2, 3, 4, 5], 3)); // 6 