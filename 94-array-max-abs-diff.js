// Question: Find the maximum absolute difference between any two elements in an array.
// Write a function that returns the largest absolute difference.
// Generated: 2025-07-16

function maxAbsDifference(arr) {
  // Solution:
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, Math.abs(arr[i] - arr[j]));
    }
  }
  return max;
}

// Example:
console.log(maxAbsDifference([1, 2, 3, 10])); // 9 