// Question: Find the maximum product of any two elements in an array.
// Write a function that returns the largest product of any two elements.
// Generated: 2025-07-16

function maxProduct(arr) {
  // Solution:
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, arr[i] * arr[j]);
    }
  }
  return max;
}

// Example:
console.log(maxProduct([1, 2, 3, 4])); // 12 