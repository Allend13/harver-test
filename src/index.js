const { getRandomWordSync, getRandomWord } = require('word-maker')


const fizzBuzzerCb = n => async resolve => {
  const modulo3 = !(n % 3)
  const modulo5 = !(n % 5)

  let randomWord
  
  await getRandomWord({ withErrors: true })
    .then(word => {
      randomWord = word
    })
    .catch(() => {
      resolve('Doh!')
    })

  if (modulo3 && modulo5) {
    resolve("FizzBuzz")
  } else if (modulo3) {
    resolve('Fizz')
  } else if (modulo5) {
    resolve('Buzz')
  } else {
    resolve(randomWord)
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