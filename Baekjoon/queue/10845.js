// const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin/').toString().split('\n');

//'/dev/stdin' 경로 오류로 readline을 사용했다.
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const queue_list = []; // push로 추가 및 shift로 삭제된 결과가 반영된 배열
  let result = ''; //출력해야 할 값들의 누적

  for (const i in input) {
    switch (true) {
      case input[i].includes('pop'):
        if (queue_list.length == 0) {
          result += Number(-1) + '\n'; //-1을 그대로 출력 할 경우 undefined가 나와서 Number로 변환
        } else {
          result += queue_list.shift() + '\n'; // 첫번째 정수를 빼기 위해shift 함수를 사용
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
