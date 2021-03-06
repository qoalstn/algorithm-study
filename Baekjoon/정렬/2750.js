const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let lines = [];

rl.on('line', function (line) {
  lines.push(line);
}).on('close', function () {
  // Solution 1 내장 함수 사용 -----------------------------
  // const N = lines.shift();
  // let arr = [];
  // for (let i = 0; i < N; i++) {
  //   arr.push(lines[i]); //두번째 줄부터 N번째줄까지 값을 배열에 담는다.
  // }

  // arr.sort((a, b) => {
  //   return a - b; // arr 배열의 값들을 오름차순으로 정렬한다.
  // });

  // for (const i of arr) {
  //   console.log(i); // 정렬된 값들을 순차로 출력한다.
  // }
  // console.log(arr.join('\n'));

  // Solution 2 선택 정렬 Selection Sort-----------------------------
  // const N = lines.shift(); // 테스트 케이스의 갯수 N
  // const arr = lines.map(Number); // 각 테스트 케이스를 number로 변환해 배열에 넣는다.

  // // i번째에 최솟값이 오도록 자리 바꾸기
  // for (let i = 0; i < N; i++) {
  //   let min = arr[i];
  //   // 최솟값 찾기
  //   for (let j = i; j < arr.length; j++) {
  //     if (min > arr[j]) {
  //       min = arr[j];
  //     }
  //   }
  //   const minIndex = arr.indexOf(min); // min의 인덱스를 찾아서
  //   arr.splice(minIndex, 1); // 배열에서 빼고
  //   arr.splice(i, 0, min); // arr의 i번째에 min을 추가한다.
  // }
  // console.log(arr.join('\n'));

  // solution 3. Bubble Sort ---------------
  // const N = lines.shift();
  // const arr = lines.map(Number);

  // for (let i = 0; i < N; i++) {
  //   let max;
  //   for (let j = 0; j < arr.length - i; j++) {
  //     if (arr[j] > arr[j + 1]) {
  //       max = arr[j];
  //       arr.splice(j, 1);
  //       arr.splice(j + 1, 0, max);
  //     }
  //   }
  // }
  // console.log(arr.join('\n'));

  // solution 4. 삽입 정렬 Insertion Sort---------------
  const N = lines.shift();
  const arr = lines.map(Number);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let min;
      if (arr[i] < arr[j]) {
        min = arr[i];
        arr[i] = arr[j];
        arr[j] = min;
      }
    }
  }

  console.log(arr.join('\n'));
});
