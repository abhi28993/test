// Question: Find the minimum product of any two elements in an array.
// Write a function that returns the smallest product of any two elements.
// Generated: 2025-07-16

function minProduct(arr) {
  // Solution:
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, arr[i] * arr[j]);
    }
  }
  return min;
}

// Example:
console.log(minProduct([1, 2, 3, 4])); // 2 