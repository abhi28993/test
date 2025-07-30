// Question: Find the product of all elements in an array.
// Write a function that returns the product of all numbers in an array.

function productArray(arr) {
  // Solution:
  return arr.reduce((prod, x) => prod * x, 1);
}

// Example:
console.log(productArray([1, 2, 3, 4])); // 24 