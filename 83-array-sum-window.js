// Question: Sum elements in a sliding window of size k.
// Write a function that returns an array of sums for each window of size k.
// Generated: 2025-07-16

function sumWindow(arr, k) {
  // Solution:
  let result = [];
  for (let i = 0; i <= arr.length - k; i++) {
    result.push(arr.slice(i, i + k).reduce((sum, x) => sum + x, 0));
  }
  return result;
}

// Example:
console.log(sumWindow([1, 2, 3, 4, 5], 3)); // [6, 9, 12] 