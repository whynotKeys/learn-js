/*
if-else if문

if (조건식1) { // 필수
  조건식1이 참일 때 실행할 코드;
  조건식1이 참일 때 실행할 코드;
  ......
} else if (조건식2) { // 생략 가능
  조건식2가 참일 때 실행할 코드;
  조건식2가 참일 때 실행할 코드;
  ......
} else if (조건식3) { // 생략 가능
  조건식3가 참일 때 실행할 코드;
  조건식3가 참일 때 실행할 코드;
  ......
} else { // 생략 가능
  조건식이 거짓일 때 실행할 코드;
  조건식이 거짓일 때 실행할 코드;
  ......
}
*/

// 나이에 따른 성인/미성년자 판별
const age = 15;
// age가 20 이상이면 "성인" 출력하고 그렇지 않으면 "미성년자" 출력
if (age >= 20) {
  console.log('성인');
} else {
  console.log('미성년자');
}

// 숫자의 부호 판별
const num = 5;
// num이 양수이면 "양수" 출력하고 그렇지 않으면 "음수" 출력, num이 0이면 "0" 출력
if (num > 0){
  console.log('양수');
} else if (num < 0) {
  console.log('음수');
} else {
  console.log(0);
}

// 비밀번호 검증
const password = 12334;
// password가 1234면 "로그인 성공!" 출력하고 그렇지 않다면 "로그인 실패!" 출력
if (password === 1234) {
  console.log('로그인 성공!');
} else {
  console.log('로그인 실패!');
}

// 짝수/홀수 판별
const num2 = 342340;
// num2가 짝수이면 "짝수" 출력하고 그렇지 않고 홀수이면 "홀수" 출력
// 단, num2는 0보다 크다
if (num2 % 2 === 0) {
  console.log('짝수');
} else {
  console.log('홀수');
}

// 3의 배수 판별
const num3 = 14;
// num3가 3의 배수이면 "3의 배수" 출력하고 그렇지 않으면 "3의 배수가 아님" 출력
if (num3 % 3 === 0) {
  console.log('3의 배수');
} else {
  console.log('3의 배수가 아님');
}
