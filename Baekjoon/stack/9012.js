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
      if (input[i][j] == '(') { // 인풋값이 '('일 경우 스택에 push한다.
        stack_list.push(input[i][j]);
      } else { // 인풋값이 ')'이고 스택에 존재하는 값이 있을 경우 pop한다.
        if (stack_list.length !== 0) {
          stack_list.pop();
        } else {
          result = 'NO'; // 인풋값이 ')'이나 스택에 존재하는 값이 없을 경우 'NO'를 출력
          break;
        }
      }
    }
    if (stack_list.length !== 0) { // for문이 끝난 뒤 스택에 남은 값이 있을 경우 짝이 맞지 않았다는 것을 의미하므로 'NO'출력
      result = 'NO';
    }
    console.log(result);
  }

  process.exit();
});
