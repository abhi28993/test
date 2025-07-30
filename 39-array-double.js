// Question: Double each element in an array.
// Write a function that returns a new array with each element doubled.

function doubleArray(arr) {
  // Solution:
  return arr.map(x => x * 2);
}

// Example:
console.log(doubleArray([1, 2, 3])); // [2, 4, 6] 