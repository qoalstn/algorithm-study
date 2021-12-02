let read = require('fs').readFileSync('dev/stdin').toString().split('\n');

//첫번째 줄 [N, X]
let condition = read[0].split(' ').map((x) => +x); // 숫자로 변환하지 않으면 에러
//두번째 줄 [N개의 수열]
let numbers = read[1].split(' ').map((x) => +x);

let result = [];
for (let i = 0; i < condition[0]; i++) {
  if (numbers[i] < condition[1]) {
    result.push(numbers[i]); //X보다 작은 숫자만 넣어 새로운 배열 result에 넣는다.
  }
}
console.log(result.join(' ')); //공백으로 구분해 출력한다.
