// Question: Convert an array to an object with keys as indices.
// Write a function that returns an object where keys are indices and values are array elements.

function arrayToObject(arr) {
  // Solution:
  return Object.assign({}, arr);
}

// Example:
console.log(arrayToObject(['a', 'b', 'c'])); // {0: 'a', 1: 'b', 2: 'c'} 