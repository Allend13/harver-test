const fs = require('fs')
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

const postIt = data => {
  // Let's suppose we've added fetch polifill :)
  let fetch = (url, { body }) => {
    // Actually we didn't :(
    // Let's just print body request for test reasons
    console.log(body)
  }

  fetch('https://superpuperapi.io', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

// YOUR CODE HERE
const promisedLoggers = []

for (let i = 1; i <= 100; ++i) {
  promisedLoggers.push(createPromisedLogger(i))
}

Promise.all(promisedLoggers)
  .then(res => {
    let data = {}
    res.map((word, i) => data[i + 1] = word)

    postIt(data)
  })

// HAVE A GOOD DAY!