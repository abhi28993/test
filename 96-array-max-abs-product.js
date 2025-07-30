// Question: Find the maximum absolute product of any two elements in an array.
// Write a function that returns the largest absolute product.
// Generated: 2025-07-16

function maxAbsProduct(arr) {
  // Solution:
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      max = Math.max(max, Math.abs(arr[i] * arr[j]));
    }
  }
  return max;
}

// Example:
console.log(maxAbsProduct([-2, 3, 4])); // 8 