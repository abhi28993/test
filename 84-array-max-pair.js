// Question: Find the maximum sum of any pair in an array.
// Write a function that returns the largest sum of any two elements.
// Generated: 2025-07-16

function maxPairSum(arr) {
  // Solution:
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[i] + arr[j]);
    }
  }
  return max;
}

// Example:
console.log(maxPairSum([1, 2, 3, 4])); // 7 