const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on('line', function (line) {
  lines.push(line)
}).on('close', function () {
  const A = lines[0].split(' ')[0]
  const B = lines[0].split(' ')[1]

if(+A<+B) console.log('<');
if(+A>+B)console.log('>')
if(+A == +B) console.log('==');

  process.exit()
})
