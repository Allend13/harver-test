const { getRandomWordSync, getRandomWord } = require('word-maker');

console.log('It works!');

// YOUR CODE HERE

let i = 1;
for (i; i <= 100; ++i) {
  console.log(`${i}: ${getRandomWordSync()}`)
}