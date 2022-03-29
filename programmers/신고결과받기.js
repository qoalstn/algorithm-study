function solution(id_list, input_report, k) {
  //중복제거
  const _report = new Set(input_report);
  const report = [..._report];

  // 신고 당한 사람을 기준으로 빈 그룹 생성
  let report_group = {};
  id_list.map((user) => (report_group[user] = []));

  // 생성한 그룹에 신고한 사람을 넣는다
  report.forEach((users) => {
    const [report_id, reported_id] = users.split(' ');
    report_group[reported_id].push(report_id);
  });

  // 기준 횟수를 초과한 사람의 그룹에 있는 신고자를 result 배열에 넣는다.
  let result = [];
  id_list.forEach((id) => {
    if (report_group[id].length >= k) {
      report_group[id].forEach((i) => result.push(i));
    }
  });

  // 메일을 받은 횟수를 객체에 담는다.
  let count = {};
  result.forEach((id) => (count[id] = (count[id] || 0) + 1));

  const answer = id_list.map((user) => (count[user] ? count[user] : 0));

  return answer;
}
const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];
const k = 2;
solution(id_list, report, k);
