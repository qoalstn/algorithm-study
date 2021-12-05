const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const stack_list = [];
  let result = '';

  for (const i in input) {
    switch (true) {
      case input[i].includes('pop'):
        if (stack_list.length == 0) {
          result += Number(-1) + '\n';
        } else {
          result += stack_list.pop() + '\n';
        }
        break;

      case input[i].includes('size'):
        result += stack_list.length + '\n';
        break;

      case input[i].includes('empty'):
        if (stack_list.length == 0) {
          result += 1 + '\n';
        } else {
          result += 0 + '\n';
        }
        break;

      case input[i].includes('top'):
        if (stack_list.length !== 0) {
          result += stack_list[stack_list.length - 1] + '\n';
        } else {
          result += Number(-1) + '\n';
        }
        break;

      case input[i].includes('push'):
        stack_list.push(input[i].replace(/[^0-9]/g, ''));
        break;
    }
  }
  console.log(result);

  process.exit();
});
