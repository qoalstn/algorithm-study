const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const input = lines[1]
    .split(' ') // 입력값을 ' '을 기준으로 잘라 배열을 만든다.
    .map((e) => +e) //숫자로 변환
    .sort((a, b) => a - b); // 오름차순으로 정렬
  console.log(input[0], input[input.length - 1]);

  process.exit();
});
