// Question: Find the maximum sum in a sliding window of size k.
// Write a function that returns the largest sum of any window of size k.
// Generated: 2025-07-16

function maxWindowSum(arr, k) {
  // Solution:
  let max = -Infinity;
  for (let i = 0; i <= arr.length - k; i++) {
    let sum = arr.slice(i, i + k).reduce((a, b) => a + b, 0);
    max = Math.max(max, sum);
  }
  return max;
}

// Example:
console.log(maxWindowSum([1, 2, 3, 4, 5], 3)); // 12 