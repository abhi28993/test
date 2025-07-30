// Question: Reverse an array in place.
// Write a function that reverses the array in place and returns it.
// Generated: 2025-07-16

function reverseInPlace(arr) {
  // Solution:
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Example:
console.log(reverseInPlace([1, 2, 3, 4])); // [4, 3, 2, 1] 