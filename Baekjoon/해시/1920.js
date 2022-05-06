const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  let N = lines[0];
  let A = lines[1].split(' ');
  let M = lines[2];
  let B = lines[3].split(' ');

  const array = new Set(A);

  const result = B.map((v) => (array.has(v) ? 1 : 0));

  console.log(result.join('\n'));

  process.exit();
});
