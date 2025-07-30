// Question: Sum all pairs of elements in an array.
// Write a function that returns an array of sums for each pair of consecutive elements.
// Generated: 2025-07-16

function sumPairs(arr) {
  // Solution:
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    result.push(arr[i] + arr[i + 1]);
  }
  return result;
}

// Example:
console.log(sumPairs([1, 2, 3, 4])); // [3, 5, 7] 