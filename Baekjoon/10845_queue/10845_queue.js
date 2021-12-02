// import fs from 'fs';

// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin/').toString().split('\n');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const queue_list = [];
  let result = '';

  for (const i in input) {
    switch (true) {
      case input[i].includes('pop'):
        if (queue_list.length == 0) {
          result += Number(-1) + '\n';
        } else {
          result += queue_list.shift() + '\n';
        }
        break;

      case input[i].includes('size'):
        result += queue_list.length + '\n';
        // console.log('size', result);
        break;
      case input[i].includes('empty'):
        if (queue_list.length == 0) {
          result += 1 + '\n';
        } else {
          result += 0 + '\n';
        }
        // console.log('empty', result);
        break;
      case input[i].includes('front'):
        if (queue_list.length !== 0) {
          result += queue_list[0] + '\n';
        } else {
          result += Number(-1) + '\n';
        }
        // console.log('front', result);
        break;
      case input[i].includes('back'):
        if (queue_list.length !== 0) {
          result += queue_list[queue_list.length - 1] + '\n';
        } else {
          result += Number(-1) + '\n';
        }
        // console.log('back', result);
        break;
      case input[i].includes('push'):
        queue_list.push(input[i].replace(/[^0-9]/g, ''));
        break;
    }
  }
  console.log(result);

  process.exit();
});
