const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on('line', function (line) {
  lines.push(line)
}).on('close', function () {
  //version.1
  // const N = lines[0]

  // let tmp = []
  // for (let i = 1; i <= N; i++) {
  //   tmp.push(lines[i])
  // }

  // tmp.sort((a, b) => {
  //   return a - b
  // })

  // tmp.forEach((e) => {
  //   console.log(+e)
  // })

  //version.2
  lines.shift()
  lines.sort((a, b) => a - b).forEach((e) => console.log(+e))

  process.exit()
})
