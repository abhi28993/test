// Question: Find the second largest number in an array.
// Write a function that returns the second largest number in an array of numbers.

function secondLargest(arr) {
  // Solution:
  let max = -Infinity, second = -Infinity;
  for (let num of arr) {
    if (num > max) {
      second = max;
      max = num;
    } else if (num > second && num < max) {
      second = num;
    }
  }
  return second;
}

// Example:
console.log(secondLargest([1, 3, 4, 5, 0, 2])); // 4 