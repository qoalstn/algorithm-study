const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on('line', function (line) {
  lines.push(line)
}).on('close', function () {
  const Y = +lines[0]
  // console.log(1, Y)
  // console.log(2, Y % 4 == 0)
  // console.log(3, Y % 100 !== 0)
  // console.log(4, Y % 400 == 0)

  let result = 0
  if ((Y % 4 == 0 && Y % 100 !== 0) || Y % 400 == 0) {
    result = 1
  }
  console.log(result)

  process.exit()
})
