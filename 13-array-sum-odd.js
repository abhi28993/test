// Question: Sum all odd numbers in an array.
// Write a function that returns the sum of all odd numbers in an array.

function sumOdd(arr) {
  // Solution:
  return arr.filter(x => x % 2 !== 0).reduce((sum, x) => sum + x, 0);
}

// Example:
console.log(sumOdd([1, 2, 3, 4, 5, 6])); // 9 