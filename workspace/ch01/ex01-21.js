/*
반복문 - for문
*/
let i = 1; //초기화
let sum = 0; //초기화

while (i <= 10) {
  // 조건식
  sum += i; // 실행 코드
  i++; // 증감식
}
console.log(sum);

/* 동일한 내용 for문으로 변환 */
for (let i = 1, sum = 0; i <= 10; i++) {
  // 초기화, 조건식, 증감식
  sum += i; // 실행 코드
}
console.log(sum);

// while 무한루프
// while (true) {

// }

//for 무한루프
// for (; ;) {

// }

//1부터 10까지 출력
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//1부터 10까지 짝수 합계 출력
sum = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(`짝수의 합계: ${sum}`);

//1부터 10까지 홀수 합계 출력
sum = 0;
for (let i = 1; i <= 10; i += 2) {
  sum += i;
}
console.log(`홀수의 합계: ${sum}`);
