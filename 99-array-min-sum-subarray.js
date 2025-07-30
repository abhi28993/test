// Question: Find the minimum sum of a contiguous subarray.
// Write a function that returns the smallest sum of any contiguous subarray.
// Generated: 2025-07-16

function minSumSubarray(arr) {
  // Solution:
  let minSum = arr[0], currSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    currSum = Math.min(arr[i], currSum + arr[i]);
    minSum = Math.min(minSum, currSum);
  }
  return minSum;
}

// Example:
console.log(minSumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // -6 