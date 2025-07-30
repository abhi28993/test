// Question: Rotate an array to the right by k steps.
// Write a function that rotates the elements of an array to the right by k steps.

function rotateArray(arr, k) {
  // Solution:
  k = k % arr.length;
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// Example:
console.log(rotateArray([1,2,3,4,5], 2)); // [4, 5, 1, 2, 3] 