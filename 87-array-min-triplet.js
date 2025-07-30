// Question: Find the minimum sum of any triplet in an array.
// Write a function that returns the smallest sum of any three elements.
// Generated: 2025-07-16

function minTripletSum(arr) {
  // Solution:
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        min = Math.min(min, arr[i] + arr[j] + arr[k]);
      }
    }
  }
  return min;
}

// Example:
console.log(minTripletSum([1, 2, 3, 4, 5])); // 6 