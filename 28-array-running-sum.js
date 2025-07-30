// Question: Return the running sum of an array.
// Write a function that returns an array where each element is the sum of all previous elements.

function runningSum(arr) {
  // Solution:
  let sum = 0;
  return arr.map(x => sum += x);
}

// Example:
console.log(runningSum([1, 2, 3, 4])); // [1, 3, 6, 10] 