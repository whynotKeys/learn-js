/*
if-else if문을 사용하여 학점을 출력하세요.
*/

// 점수 변수 선언 및 초기화
const score = 99;

// 90점 이상 100점 이하인 경우 A학점
if (score >= 90 && score <= 100) {
  console.log('A');
} else if (score >= 80) { // 80점 이상 90점 미만인 경우 B학점
  console.log('B');
} else if (score >= 70) { // 70점 이상 80점 미만인 경우 C학점
  console.log('C');
} else if (score >= 60) { // 60점 이상 70점 미만인 경우 D학점 
  console.log('D');
} else { // 60점 미만인 경우 F학점
  console.log('F');
}
