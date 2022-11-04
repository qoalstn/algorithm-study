function solution(food) {
    const cnt_arr = [];
    const answer = []

    for (let i = 1; i < food.length; i++) {

      let cnt = 0;
      let item = food[i]

      while (item > 1) {
        item = item - 2
        cnt++
      }

      cnt_arr.push(cnt)

      for (let j = 0; j < cnt; j++) {
        answer.push(i)
      }
    }

    const reverse = [...answer].reverse()

    for (let i = 0; i < food[0]; i++) {
      answer.push(0)
    }

    return answer.concat(reverse).join("")
}
