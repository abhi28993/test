// Question: Find the maximum sum of any triplet in an array.
// Write a function that returns the largest sum of any three elements.
// Generated: 2025-07-16

function maxTripletSum(arr) {
  // Solution:
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        max = Math.max(max, arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return max;
}

// Example:
console.log(maxTripletSum([1, 2, 3, 4, 5])); // 12 