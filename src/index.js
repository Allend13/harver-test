const { getRandomWordSync, getRandomWord } = require('word-maker')


const fizzBuzzer = (n) => {
  const modulo3 = !(n % 3)
  const modulo5 = !(n % 5)

  if (modulo3 && modulo5) {
    return "FizzBuzz"
  } else if (modulo3) {
    return 'Fizz'
  } else if (modulo5) {
    return 'Buzz'
  } else {
    return getRandomWordSync()
  }
}

// YOUR CODE HERE
let i = 1

for (i; i <= 100; ++i) {
  console.log(`${i}: ${fizzBuzzer(i)}`)
}