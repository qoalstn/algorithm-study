const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const N = lines[0].split(' ')[0];
  const M = lines[0].split(' ')[1]; //M은 문자열로 반환되므로 숫자로 변환이 필요하다.
  const input = lines[1].split(' ').map((e) => +e);

  let tmp = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        // 같은 자리끼리는 더하지 않는다.
        if (i !== j && i !== k && j !== k) {
          // M보다 작을 경우만 tmp 배열에 추가
          if (input[i] + input[j] + input[k] <= +M) {
            tmp.push(input[i] + input[j] + input[k]);
          }
        }
      }
    }
  }

  //내림차순으로 정렬 후 가장 높은 첫번째 수를 출력
  const result = tmp.sort((a, b) => b - a);
  console.log(result[0]);

  process.exit();
});
