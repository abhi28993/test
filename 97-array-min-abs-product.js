// Question: Find the minimum absolute product of any two elements in an array.
// Write a function that returns the smallest absolute product.
// Generated: 2025-07-16

function minAbsProduct(arr) {
  // Solution:
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, Math.abs(arr[i] * arr[j]));
    }
  }
  return min;
}

// Example:
console.log(minAbsProduct([-2, 3, 4])); // 6 