import { generate } from 'random-words'
import chalk from 'chalk'

var nn = generate({ exactly: 1, minLength: 10, wordsPerString: 1 })
if (nn.length == 2) {
  console.log('rip')
}
 const word2 = generate()
console.log(`The ${chalk.greenBright(nn)} is ${chalk.redBright(word2)}.`)

export const sum = (a, b) => {
    return a + b;
  };    
