const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// console.log('start');
let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = input.shift();
  //for문 밖에 정의 하면 틀림
  // let stack_list = [];
  // let result = 'YES';

  for (let i = 0; i < N; i++) {
    let stack_list = [];
    let result = 'YES';

    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] == '(') {
        stack_list.push(input[i][j]);
      } else {
        if (stack_list.length !== 0) {
          stack_list.pop();
        } else {
          result = 'NO';
          break;
        }
      }
    }
    if (stack_list.length !== 0) {
      result = 'NO';
    }
    console.log(result);
  }

  process.exit();
});
