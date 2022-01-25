const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const N = +lines.shift();

  let answer = '';

  for (let i = 1; i <= N; i++) {
    answer += i + '\n';
  }

  console.log(answer);
  process.exit();
});
