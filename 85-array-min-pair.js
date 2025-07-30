// Question: Find the minimum sum of any pair in an array.
// Write a function that returns the smallest sum of any two elements.
// Generated: 2025-07-16

function minPairSum(arr) {
  // Solution:
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, arr[i] + arr[j]);
    }
  }
  return min;
}

// Example:
console.log(minPairSum([1, 2, 3, 4])); // 3 