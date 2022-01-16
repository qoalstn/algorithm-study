const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const x = Number(lines[0]);
  const y = Number(lines[1]);

  let result = 0;

  if (x < 0 && y < 0) {
    result = 3;
  } else if (x < 0 && y > 0) {
    result = 2;
  } else if (x > 0 && y < 0) {
    result = 4;
  } else if (x > 0 && y > 0) {
    result = 1;
  }

  console.log(result);
  process.exit();
});
