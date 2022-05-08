const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  const N = lines.shift();
  // lines의 총 갯수
  const lineLength = lines.length;
  let clothes = [];
  let cnt = -1;
  for (let i = 0; i < lineLength; i++) {
    if (isNaN(lines[i] + 1)) {
      const key = lines[i].split(' ')[1];
      const value = lines[i].split(' ')[0];
      clothes[cnt].push({ [key]: value });
    } else {
      clothes.push([]);
      cnt++;
    }
  }
  // console.log(clothes);

  let answer = [];

  for (const i of clothes) {
    let keyArr = [];
    for (const j of i) {
      keyArr.push(Object.keys(j)[0]);
    }

    // console.log(1, keyArr);

    let answerTmp = {};
    keyArr.forEach((e) => {
      answerTmp[e] = (answerTmp[e] || 0) + 1;
    });

    // console.log(2, answerTmp);

    let result = 1;
    for (const key in answerTmp) {
      result *= answerTmp[key] + 1;
    }
    answer.push(result - 1);

    // console.log(3, result);
  }

  console.log(answer.join('\n'));
  // console.log(answer.join('\n'));

  process.exit();
});
