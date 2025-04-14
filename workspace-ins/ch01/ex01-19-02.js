/*
switch문을 사용하여 학점을 출력하세요.
*/

// 점수 변수 선언
const score = 100;

// 점수를 10으로 나누고 정수 부분만 추출하는 방법
// 예시:
// 67/10 -> parseInt(6.7) -> 6
// 36.6/10 -> parseInt(3.66) -> 3
// 99/10 -> parseInt(9.9) -> 9

// switch문을 사용하여 학점 계산
// 90점 이상: A
// 80점 이상: B
// 70점 이상: C
// 60점 이상: D
// 60점 미만: F
switch (parseInt(score/10)) {
  case 10:  // 100점
  case 9:   // 90-99점
    console.log('A');
    break;
  case 8:   // 80-89점
    console.log('B');
    break;
  case 7:   // 70-79점
    console.log('C');
    break;
  case 6:   // 60-69점
    console.log('D');
    break;
  default:  // 60점 미만
    console.log('F');
}
