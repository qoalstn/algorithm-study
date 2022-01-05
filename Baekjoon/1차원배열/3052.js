const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  tmp = [];
  lines.forEach((e) => {
    tmp.push(e % 42); //입력값을 42로 나눈 나머지를 tmp에 담는다.
  });
  const rs = new Set(tmp); //중복 제거
  console.log([...rs].length);
  process.exit();
});
