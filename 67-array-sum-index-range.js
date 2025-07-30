// Question: Sum elements at indices in a given range.
// Write a function that returns the sum of elements at indices from start to end (inclusive).
// Generated: 2025-07-16

function sumIndexRange(arr, start, end) {
  // Solution:
  let sum = 0;
  for (let i = start; i <= end; i++) sum += arr[i];
  return sum;
}

// Example:
console.log(sumIndexRange([1, 2, 3, 4, 5], 2, 4)); // 12 