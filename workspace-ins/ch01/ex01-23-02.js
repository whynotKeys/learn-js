/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// 변수 선언 및 초기화
let userName = '차차핑';  // 학생 이름
let kor = 100;           // 국어 점수
let eng = 90;            // 영어 점수
let math = 85;           // 수학 점수

// 총점과 평균 계산
let sum = kor + eng + math;  // 세 과목의 총점 계산
let avg = sum / 3;           // 평균 계산 (총점 / 과목 수)

// 결과 출력
console.log('총점', sum);
console.log('평균', avg);

// 객체를 사용한 성적 관리
const score = new Object();  // 성적 객체 생성
score.userName = '차차핑';   // 객체에 학생 이름 저장
score.kor = 100;            // 객체에 국어 점수 저장
score.eng = 90;             // 객체에 영어 점수 저장
score.math = 85;            // 객체에 수학 점수 저장

// 객체를 사용한 총점과 평균 계산
score.sum = score.kor + score.eng + score.math;  // 객체의 속성을 사용한 총점 계산
score.avg = score.sum / 3;                       // 객체의 속성을 사용한 평균 계산

// 객체를 사용한 결과 출력
console.log('총점', score.sum);
console.log('평균', score.avg);