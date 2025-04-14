/*
학생의 점수에 따라 학점을 계산하고 출력하는 프로그램입니다.
if문을 사용하여 각 점수 구간에 맞는 학점을 출력합니다.
*/

// 학생의 점수를 저장하는 변수 (0~100 사이의 정수)
const score = 79;

// 학점 계산 로직
// 90점 이상 100점 이하: A학점
if (score >= 90 && score <= 100) {
  console.log('A');
}
// 80점 이상 90점 미만: B학점
if (score >= 80 && score < 90) {
  console.log('B');
}
// 70점 이상 80점 미만: C학점
if (score >= 70 && score < 80) {
  console.log('C');
}
// 60점 이상 70점 미만: D학점
if (score >= 60 && score < 70) {
  console.log('D');
}
// 60점 미만: F학점
if (score < 60) {
  console.log('F');
}

