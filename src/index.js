const { getRandomWordSync, getRandomWord } = require('word-maker')


const fizzBuzzerCb = n => resolve => {
  const modulo3 = !(n % 3)
  const modulo5 = !(n % 5)

  if (modulo3 && modulo5) {
    resolve("FizzBuzz")
  } else if (modulo3) {
    resolve('Fizz')
  } else if (modulo5) {
    resolve('Buzz')
  } else {
    getRandomWord()
      .then(word => {
        resolve(word)
      })
  }
}

const createPromisedLogger = n => (
  new Promise(fizzBuzzerCb(n))
)

// YOUR CODE HERE
for (let i = 1; i <= 100; ++i) {
  createPromisedLogger(i)
    .then(word => console.log(`${i}: ${word}`))
}