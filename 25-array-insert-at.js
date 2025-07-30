// Question: Insert an element at a specific index in an array.
// Write a function that returns a new array with the value inserted at the given index.

function insertAt(arr, index, value) {
  // Solution:
  let copy = arr.slice();
  copy.splice(index, 0, value);
  return copy;
}

// Example:
console.log(insertAt([1, 2, 4, 5], 2, 3)); // [1, 2, 3, 4, 5] 