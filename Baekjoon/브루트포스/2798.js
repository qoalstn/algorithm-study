// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let lines = [];

// rl.on('line', function (line) {
//   lines.push(line);
// }).on('close', function () {
//   const N = lines[0].split(' ')[0];
//   const M = lines[0].split(' ')[1];
//   const input_ = lines[1].split(' ').map((e) => +e);
//   const input = input_.sort((a, b) => a - b);
//   //   console.log(N, M, input);
//   let arr = [];
//   for (let i = 0; i < N; i++) {
//     for (let j = 0; j < N; j++) {
//       for (let k = 0; k < N; k++) {
//         console.log(input[i], input[j], input[k]);
//         if (input[i] + input[j] + input[k] <= M) {
//           arr.push(input[i] + input[j] + input[k]);
//         }
//       }
//     }
//     // const tmp = input[i] + input[i + 1] + input[i + 2];
//     // console.log('---------', tmp);
//     // if (tmp <= M) {
//     //   //   console.log('통과');
//     //   arr.push(tmp);
//     //   //   console.log(tmp);
//     // }
//   }
//   const rs = arr.sort((a, b) => b - a);
//   //   console.log(rs);
//   console.log(rs[0]);

//   process.exit();
// });
