const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const T = lines.shift();

  lines.forEach((e) => {
    // console.log(e.split(' ')[0]);
    // console.log(e.split(' ')[1]);
    const result = Number(e.split(' ')[0]) + Number(e.split(' ')[1]);
    console.log(result);
  });

  process.exit();
});
