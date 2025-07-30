// Question: Find the first odd number in an array.
// Write a function that returns the first odd number, or null if none.

function findFirstOdd(arr) {
  // Solution:
  return arr.find(x => x % 2 !== 0) ?? null;
}

// Example:
console.log(findFirstOdd([2, 4, 6, 7, 8])); // 7 