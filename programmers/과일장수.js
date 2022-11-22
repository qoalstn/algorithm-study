function solution(k, m, score) {
    var answer = 0;
    const rsArr = []
    const sorted = score.sort((a, b) => a - b) // 오름차순으로 정렬

    // pop으로 빼내면 배열이 점점 줄어든다. m개 미만일 경우 상자가 채워지지 않으므로 중지
    while (sorted.length >= m) { 
      const arr = []
      for (let i = 0; i < m; i++) {
        arr.push(sorted.pop()) // m만큼 큰 순서로 상자에 담는다
      }
      rsArr.push(arr) // 각 상자를 다시 배열에 담는다
    }

    // 배열을 돌며 각 상자의 수익을 더한다
    for (const i of rsArr) {
      answer += i[i.length - 1] * m
    }

    return answer;
}
