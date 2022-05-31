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
  // [
  //   [ { k1: 'v' }, { k1: 'v' }, { k2: 'v' } ],
  //   [ { k4: 'v' }, { k5: 'v' }, { k5: 'v' } ]
  // ]

  let answer = [];

  for (const i of clothes) {
    let keyArr = [];
    for (const j of i) {
      keyArr.push(Object.keys(j)[0]);
    }

    // console.log(1, keyArr);
    // [ 'k1', 'k1', 'k2' ]

    let answerTmp = {};
    keyArr.forEach((e) => {
      answerTmp[e] = (answerTmp[e] || 0) + 1;
    });

    // console.log(2, answerTmp);
    // { k1: 2, k2: 1 }

    let result = 1;
    for (const key in answerTmp) {
      result *= answerTmp[key] + 1;
    }

    // console.log(3, result);

    answer.push(result - 1);
  }

  console.log(answer.join('\n'));

  process.exit();
});
