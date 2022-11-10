function solution(sizes) {
    // 각 카드의 큰 사이즈가 배열의 처음에 오도록 정렬
    const s = sizes.map((e) => e.sort((a, b) => a - b))

    // 가로 세로 사이즈를 각각 오름차순으로 정렬
    const maxw = s.map((e) => e[0]).sort((a, b) => a - b)
    const maxh = s.map((e) => e[1]).sort((a, b) => a - b)

    // 가장 큰 가로와 가장 큰 세로를 곱한다
    return maxw.pop() * maxh.pop();
}
