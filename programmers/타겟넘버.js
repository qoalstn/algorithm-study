function solution(numbers, target) {
  function dfs(numbers, target, sum, current) {
    let answer = 0;

    console.log("cur : ", current);

    if (current == numbers.length) {
      if (sum == target) {
        return 1;
      }
      return 0;
    }

    answer += dfs(numbers, target, sum + numbers[current], current + 1);
    answer += dfs(numbers, target, sum + numbers[current] * -1, current + 1);

    return answer;
  }

  return dfs(numbers, target, 0, 0);
}

// DFS를 이용하여 풀이
// 자바로 된 코드를 보고 작성하기는 했는데 재귀함수가 아직 머릿속에 잘 그려지지 않는다
// TODO : 이해하고 풀이 주석으로 넣기
