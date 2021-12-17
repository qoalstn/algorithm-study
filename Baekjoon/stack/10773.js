const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const N = lines[0]; // 첫째줄의 입력값은 총 입력값의 갯수
  let result = 0;//최종 결과 초기화

  let tmp = [];
  for (let i = 1; i <= N; i++) {
    if (lines[i] == 0) {
      tmp.pop(); // 입력값이 0이면 마지막 값을 빼내고
    } else {
      tmp.push(lines[i]); // 0이 아닐경우 입력값을 배열에 추가한다.
    }
  }

//주어진 규칙에 따라 만들어진 배열 tmp의 값을 모두 합해 result를 만든다.
  for (const i of tmp) {
    result += Number(i);
  }

  console.log(result);

  process.exit();
});
