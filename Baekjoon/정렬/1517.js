// 버블 정렬
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
  const arr = lines.map(Number);

  for (let i = 0; i < N; i++) {
    let max;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        max = arr[j];
        arr.splice(j, 1);
        arr.splice(j + 1, 0, max);
      }
    }
  }
  console.log(arr.join('\n'));
  process.exit();
});
