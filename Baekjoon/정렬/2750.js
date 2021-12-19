const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on('line', function (line) {
  lines.push(line)
}).on('close', function () {
  const N = lines[0]

  let tmp = []
  for (let i = 1; i <= N; i++) {
    tmp.push(lines[i]) //두번째 줄부터 N번째줄까지 값을 배열에 담는다.
  }

  tmp.sort((a, b) => {
    // tmp 배열의 값들을 오름차순으로 정렬한다.
    return a - b
  })

  for (const i of tmp) {
    console.log(i) // 정렬된 값들을 순차로 출력한다.
  }

  process.exit()
})
