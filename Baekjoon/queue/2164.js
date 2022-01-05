const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let lines = [];

// rl.on('line', function (line) {
//   lines.push(line);
// }).on('close', function () {
//1~N까지 배열에 넣는다[1,2,3...N]
//shift 후 array[0]을 push를 array의 길이가 1이 될 때까지 한다.

// let arr = [];
// for (let i = 1; i <= lines[0]; i++) {
//   arr.push(i);
// }

// for (let i = 0; i < lines[0] - 1; i++) {
//   arr.shift();
//   const first = arr.shift();
//   arr.push(first);
// }
// console.log(arr[0]);

//   process.exit();
// });

//위의 코드는 shift를 할 경우 나머지 뒤의 값들을 다 한 칸씩 당겨야하므로 시간 복잡도가 너무 커져 시간초과,
//아래는 링크드리스트를 이용한 풀이.

const input = [];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  getHead() {
    return this.head.value;
  }

  removeHead() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }

  getSize() {
    return this._size;
  }
}

function getLastCard(n) {
  const cards = new LinkedList();

  for (let i = 1; i <= n; i++) {
    cards.add(i);
  }
  while (cards.getSize() !== 1) {
    cards.removeHead();
    cards.add(cards.getHead());
    cards.removeHead();
  }

  return cards.getHead();
}

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const N = +input[0];

  const card = getLastCard(N);
  console.log(card);

  process.exit();
});
