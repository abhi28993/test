// Question: Find the first even number in an array.
// Write a function that returns the first even number, or null if none.

function findFirstEven(arr) {
  // Solution:
  return arr.find(x => x % 2 === 0) ?? null;
}

// Example:
console.log(findFirstEven([1, 3, 5, 6, 7])); // 6 