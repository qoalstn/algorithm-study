const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const input = lines[0].split(''); // 입력값들을 공백을 기준으로 잘라 배열에 담는다
  const tmp = input.sort((a, b) => {
    return b - a; // 입력받은 값을 내림차순으로 정렬
  });

  let result = '';
  for (const i of tmp) {
    result = result + i; //tmp의 원소들을 문자열로 합친다.
  }

  console.log(result);

  process.exit();
});
