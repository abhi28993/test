// Question: Find the minimum difference between any two elements in an array.
// Write a function that returns the smallest difference between any two elements.
// Generated: 2025-07-16

function minDifference(arr) {
  // Solution:
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, Math.abs(arr[i] - arr[j]));
    }
  }
  return min;
}

// Example:
console.log(minDifference([1, 2, 3, 10])); // 1 