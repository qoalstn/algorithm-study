const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  let value = input[0];
  function factorial(value) {
    if (value == 0) return 1; // 0일 경우 1을 출력, 이 조건이 없으면 RangeError: Maximum call stack size exceeded 에러
    return value * factorial(value - 1);
  }

  console.log(factorial(value));
  process.exit();
});
