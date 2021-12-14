const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const values = input[0].split(' ')

  const N = +values[0]
  const limit = +values[1]

  console.log(N, limit, input[1])
  let cnt = 0
  for (const i of input[1].split(' ')) {
    if (i < limit) {
      cnt = cnt + 1
    }
  }

  console.log(cnt)

  process.exit()
})
