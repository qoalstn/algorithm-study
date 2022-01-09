const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let lines = []

rl.on('line', function (line) {
  lines.push(line)
}).on('close', function () {
  const score = +lines[0]

  console.log(score)
  //시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.
  let result = ''
  if (90 <= score && score <= 100) result = 'A'
  if (80 <= score && score < 90) result = 'B'
  if (70 <= score && score < 80) result = 'C'
  if (60 <= score && score < 70) result = 'D'
  if (score < 60) result = 'F'

  console.log(result)
  process.exit()
})
