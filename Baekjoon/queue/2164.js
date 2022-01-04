const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  //1~N까지 배열에 넣는다[1,2,3...N]
  //shift로 첫번째 카드를 빼고 다음 카드를 shift로 뺀 뒤 push, array의 길이가 1이 될 때까지 한다.

  let arr = [];
  for (let i = 1; i <= lines[0]; i++) {
    arr.push(i);
  }

  for (let i = 0; i < lines[0] - 1; i++) {
    arr.shift();
    const first = arr.shift();
    arr.push(first);
  }
  console.log(arr[0]);

  //위의 코드는 시간초과
  // while (arr.length >1) {
    
  // }
  process.exit();
});