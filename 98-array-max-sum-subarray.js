// Question: Find the maximum sum of a contiguous subarray (Kadane's algorithm).
// Write a function that returns the largest sum of any contiguous subarray.
// Generated: 2025-07-16

function maxSumSubarray(arr) {
  // Solution:
  let maxSum = arr[0], currSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currSum = Math.max(arr[i], currSum + arr[i]);
    maxSum = Math.max(maxSum, currSum);
  }
  return maxSum;
}

// Example:
console.log(maxSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 