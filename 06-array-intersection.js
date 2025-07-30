// Question: Find the intersection of two arrays.
// Write a function that returns an array of elements that appear in both input arrays.

function arrayIntersection(arr1, arr2) {
  // Solution:
  return arr1.filter(x => arr2.includes(x));
}

// Example:
console.log(arrayIntersection([1,2,3], [2,3,4])); // [2, 3] 