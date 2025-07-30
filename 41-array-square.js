// Question: Square each element in an array.
// Write a function that returns a new array with each element squared.

function squareArray(arr) {
  // Solution:
  return arr.map(x => x * x);
}

// Example:
console.log(squareArray([1, 2, 3])); // [1, 4, 9] 