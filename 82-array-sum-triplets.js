// Question: Sum all triplets of elements in an array.
// Write a function that returns an array of sums for each triplet of consecutive elements.
// Generated: 2025-07-16

function sumTriplets(arr) {
  // Solution:
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    result.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
  return result;
}

// Example:
console.log(sumTriplets([1, 2, 3, 4, 5])); // [6, 9, 12] 