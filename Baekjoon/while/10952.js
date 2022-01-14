const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  for (let i = 0; ; i++) {
    const N1 = +input[i].split(' ')[0];
    const N2 = +input[i].split(' ')[1];

    const result = N1 + N2;

    if (!result) {
      break;
    }
    console.log(result);
  }

  process.exit();
});
