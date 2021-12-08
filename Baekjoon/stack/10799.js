const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input_ = [];

rl.on('line', function (line) {
  input_.push(line);
}).on('close', function () {
  let input = input_[0];
  let stack_list = [];
  let count = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] == '(') {
      // '('일 경우 stack리스트에 1을 넣는다.
      stack_list.push(1);
    } else if (input[i - 1] == '(' && input[i] == ')') {
      // ')'면서 이전 문자가 '(' 일 경우 레이져이므로 1을 추가하는 대신 이전 문자'('를 꺼내고 기존 막대의 갯수에서 1씩 추가한다.
      stack_list.pop();
      for (let i = 0; i < stack_list.length; i++) {
        stack_list[i] = stack_list[i] + 1;
      }
    } else if (input[i] == ')') {
      //')'면서 이전 문자가 '(' 가 아닐 경우 막대의 끝이며 더이상 count가 증가하지 않으므로 스택리스트에서 꺼내며 현재 갯수를 count에 추가한다.
      count += stack_list[stack_list.length - 1];
      stack_list.pop();
    }
  }
  console.log(count);

  process.exit();
});
