function solution(id_list, input_report, k) {
  let answer = [];

  //중복제거
  const _report = new Set(input_report);
  const report = [..._report];

  // k번 이상 신고당한 아이디
  let tmp = {};
  let outIds = [];
  const rs = report.map((e) => e.split(' ')[1]);
  rs.forEach((e) => {
    tmp[e] = (tmp[e] || 0) + 1;
    if (tmp[e] == k) outIds.push(e);
  });

  let _answer = [];
  for (let i = 0; i < id_list.length; i++) {
    for (let j = 0; j < report.length; j++) {
      _answer[i][0] = id_list[i];
      _answer[i][1]; // 유저가 신고한 ID
      _answer[i][2]; // 정지된 ID
    }
  }

  return answer;
}
const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
const k = 2;
solution(id_list, report, k);
