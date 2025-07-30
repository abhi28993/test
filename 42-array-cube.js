// Question: Cube each element in an array.
// Write a function that returns a new array with each element cubed.

function cubeArray(arr) {
  // Solution:
  return arr.map(x => x * x * x);
}

// Example:
console.log(cubeArray([1, 2, 3])); // [1, 8, 27] 