const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const N = lines.shift();

  let result = [];
  for (let i = 0; i < N; i++) {
    const x = lines[i].split(' ')[0];
    const y = lines[i].split(' ')[1];

    let count = 0;
    for (let j = 0; j < N; j++) {
      const x_ = lines[j].split(' ')[0];
      const y_ = lines[j].split(' ')[1];
      if (i !== j && x < x_ && y < y_) {
        count++;
      }
    }
    result.push(count + 1);
    count = 0;
  }
  console.log(result.join(' '));
  process.exit();
});
