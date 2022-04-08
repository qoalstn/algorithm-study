const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const [N, K] = input[0].split(' ').map(Number);
  let arrayN = [];
  let result = [];
  let count = 0;

  // 배열에 1부터 N까지의 수를 넣는다.
  for (let i = 0; i < N; i++) {
    count = count + 1;
    arrayN.push(count);
  }

  // console.log(1, arrayN);
  while (arrayN.length !== 0) {
    // 배열의 앞에서 두번째까지는 뒤로 보내고
    for (let j = 1; j < K; j++) {
      arrayN.push(arrayN.shift());
    }

    // 1개만 남은 경우 값을 빼서 result에 넣고 while문을 종료시킨다.
    if (arrayN.length == 1) {
      result.push(arrayN.pop());
    } else {
      // 앞의 for문에서 두번째까지는 뒤로 보냈으로 현재 세번째 원소가 맨 앞에 있는 상태.
      // 맨 앞의 원소를 result에 넣는다.
      result.push(arrayN.shift());
    }
  }
  console.log(`<${result.join(', ')}>`);
  process.exit();
});
