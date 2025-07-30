// Question: Partition an array into two arrays: one with even numbers, one with odd numbers.
// Write a function that returns an object with keys 'even' and 'odd'.

function partitionEvenOdd(arr) {
  // Solution:
  return {
    even: arr.filter(x => x % 2 === 0),
    odd: arr.filter(x => x % 2 !== 0)
  };
}

// Example:
console.log(partitionEvenOdd([1, 2, 3, 4, 5])); // { even: [2, 4], odd: [1, 3, 5] } 