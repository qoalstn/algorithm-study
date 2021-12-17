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
  let result = 0;

  let tmp = [];
  for (let i = 1; i <= N; i++) {
    if (lines[i] == 0) {
      tmp.pop();
    } else {
      tmp.push(lines[i]);
    }
  }

  for (const i of tmp) {
    result += Number(i);
  }

  console.log(result);

  process.exit();
});
