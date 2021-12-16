const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const N = lines[0];

  let result = ''; //const를 사용할 경우 for문 내부에서 값이 변경되므로 Assignment to constant variable.에러
  for (let i = 1; i <= N; i++) {
    const input = lines[i].split(' ');
    result = Number(input[0]) + Number(input[1]);
    console.log(`Case #${i}:`, result);
  }
  process.exit();
});
