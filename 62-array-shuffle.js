// Question: Shuffle an array randomly.
// Write a function that returns a new array with the elements shuffled.
// Generated: 2025-07-16

function shuffleArray(arr) {
  // Solution:
  let copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// Example:
console.log(shuffleArray([1, 2, 3, 4])); // e.g., [3, 1, 4, 2] 