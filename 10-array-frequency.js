// Question: Find the frequency of each element in an array.
// Write a function that returns an object with the frequency of each element in the array.

function arrayFrequency(arr) {
  // Solution:
  return arr.reduce((freq, num) => {
    freq[num] = (freq[num] || 0) + 1;
    return freq;
  }, {});
}

// Example:
console.log(arrayFrequency([1,2,2,3,3,3])); // {1:1, 2:2, 3:3} 