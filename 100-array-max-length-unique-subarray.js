// Question: Find the length of the longest subarray with all unique elements.
// Write a function that returns the length of the longest subarray with no repeating elements.
// Generated: 2025-07-16

function maxLengthUniqueSubarray(arr) {
  // Solution:
  let maxLen = 0, start = 0, seen = {};
  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]] !== undefined && seen[arr[i]] >= start) {
      start = seen[arr[i]] + 1;
    }
    seen[arr[i]] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}

// Example:
console.log(maxLengthUniqueSubarray([1, 2, 1, 3, 4, 2, 3])); // 4 