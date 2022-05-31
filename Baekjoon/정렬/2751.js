const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
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
  lines.shift(); // 입력값 배열의 첫번째는 정렬 해야 되는 값이 아니므로 빼낸다.
  lines.sort((a, b) => a - b).forEach((e) => console.log(+e)); //나머지 값들을 정렬 후 차례로 출력한다.

  process.exit();
});
