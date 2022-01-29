const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  let caseCount = Number(lines[0]);
  let result = '';

  for (let i = 1; i <= caseCount; i++) {
    let count = Number(input[i].split(' ')[0]); // 각 케이스 당 문자 반복 횟수 (R)
    let cases = input[i].split(' ')[1]; // 케이스 문자열 분리

    for (let j = 0; j < cases.length; j++) {
      for (let k = 0; k < count; k++) {
        result += cases[j];
      }
    }
    result += '\n';
  }

  console.log(result);

  process.exit();
});
