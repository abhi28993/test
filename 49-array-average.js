// Question: Find the average of all elements in an array.
// Write a function that returns the average value of the array.

function averageArray(arr) {
  // Solution:
  return arr.reduce((sum, x) => sum + x, 0) / arr.length;
}

// Example:
console.log(averageArray([1, 2, 3, 4])); // 2.5 