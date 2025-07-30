// Question: Chunk an array into smaller arrays of a given size.
// Write a function that splits an array into chunks of a specified size.

function chunkArray(arr, size) {
  // Solution:
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Example:
console.log(chunkArray([1,2,3,4,5], 2)); // [[1,2],[3,4],[5]] 