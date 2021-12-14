const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []

rl.on('line', function (line) {
  input.push(line)
}).on('close', function () {
  const values = input[0].split(' ') //[ '3', '7' ] 첫째줄에 입력된 두 숫자가 ' '를 기준으로 분할되어 배열에 담긴다.

  const N = +values[0] //3, 숫자로 변환
  const limit = +values[1] //7

  const inputs = input[1].split(' ') // 둘째줄에 입력된 수열을 ' '를 기준으로 분기하여 배열에 담는다.

  let result = ''

  // version 1 for of를 이용해 코드를 간소화했다.
  // for (const i of input[1].split(' ')) {
  //   if (+i < limit) {
  //     result += +i + ' '
  //   }
  // }

  //version 2. 주어진 N을 사용하여 구현했다.
  for (let i = 0; i < N; i++) {
    if (inputs[i] < limit) {
      result += +inputs[i] + ' ' // split으로 추출한 요소를 솟자형으로 변환했다.
    }
  }

  console.log(result)
  process.exit()
})
