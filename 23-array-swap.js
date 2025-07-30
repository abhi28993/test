// Question: Swap two elements in an array by their indices.
// Write a function that swaps the elements at two given indices.

function swapElements(arr, i, j) {
  // Solution:
  let copy = arr.slice();
  [copy[i], copy[j]] = [copy[j], copy[i]];
  return copy;
}

// Example:
console.log(swapElements([1, 2, 3, 4], 1, 3)); // [1, 4, 3, 2] 