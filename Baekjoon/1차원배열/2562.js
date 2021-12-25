const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  // const input = lines.map((e) => +e);
  const input = lines.map(Number); // map(Number)로 위의 코드와 동일하게 배열 안의 모든 원소를 숫자로 변환 할 수 있다.

  // 스프레드 문법(...input)으로 기존 배열을 복사 한 뒤 정렬하여 max를 찾는다.
  // const max = [...input].sort((a, b) => b - a)[0]; //  1. input을 정렬해버리면 기존 배열의 순서가 변경되므로 두번째 결과값인 인덱스를 찾기 어렵다.
  const max = Math.max(...input); // 2. Math 함수를 이용하여 배열에서 최대값을 찾을 수 있다.

  // const index = input.findIndex((e) => e == max) + 1; // 1. findIndex사용
  const index = input.indexOf(max) + 1; // 2. indexOf 사용

  console.log(max);
  console.log(index);

  process.exit();
});
