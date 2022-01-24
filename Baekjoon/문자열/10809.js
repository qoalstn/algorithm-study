const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on('line', function (line) {
  lines.push(line)
}).on('close', function () {
  const S = lines[0].split('')

  let result = ''

  for (let i = 97; i <= 122; i++) {
    result += S.indexOf(String.fromCharCode(i)) + ' '
  }

  console.log(result)

  process.exit()
})
