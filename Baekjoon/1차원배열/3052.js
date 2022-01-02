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
    tmp.push(e % 42);
  });
  const rs = new Set(tmp);
  console.log([...rs].length);
  process.exit();
});
