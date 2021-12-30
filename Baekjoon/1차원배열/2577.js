const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const x = +lines[0];
  const y = +lines[1];
  const z = +lines[2];
  const N = x * y * z;
  //   console.log(N);

  for (let i = 0; i <= 9; i++) {
    let count = 0;
    for (let j = 0; j < String(N).length; j++) {
      if (String(N)[j] == i) {
        count++;
      }
    }
    console.log(count);
  }
  process.exit();
});
