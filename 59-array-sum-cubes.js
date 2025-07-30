// Question: Sum the cubes of all elements in an array.
// Write a function that returns the sum of the cubes of all numbers.

function sumCubes(arr) {
  // Solution:
  return arr.reduce((sum, x) => sum + x * x * x, 0);
}

// Example:
console.log(sumCubes([1, 2, 3])); // 36 