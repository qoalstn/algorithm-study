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
  const scores = lines[0].split(' ');
  const max = [...scores].map(Number).sort((a, b) => b - a)[0];

  //   let tmp = [];
  //   scores.forEach((e) => {
  //     tmp.push((e / max) * 100); //새로운 점수
  //   });

  //   let total = 0;
  //   tmp.map((e) => {
  //     total += e; //새로운 점수의 누적합
  //   });
  //   console.log(total / N);

  //리팩토링
  let total = 0;
  scores.forEach((e) => {
    total += (e / max) * 100;
  });

  console.log(total / N);

  process.exit();
});
