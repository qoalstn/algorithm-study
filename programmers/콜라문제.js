function solution(a, b, n) {

    let bottle = n
    let answer = 0

    while (bottle >= a) {
      const cola = Math.floor(bottle / a)
      answer += cola * b
      bottle = bottle - cola * a + cola * b
    }

    return answer;
}
