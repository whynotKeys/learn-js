/*
반복문 - for문

for (초기화; 조건식; 증감식) {
  반복할 구문1;
  반복할 구문2;
}
*/

// 1부터 10까지의 모든 수의 합계를 출력
// let sum = 0;
// let i = 1; // 초기화 1
// while (i <= 10) { // 조건식 2
//   sum += i; // 실행할 코드 3
//   i++; // 증감식 4
// }

// for문을 사용하여 1부터 10까지의 합계 계산
let sum = 0;
for (let i=1; i <= 10; i++) { // 초기화, 조건식, 증감식
  sum += i; // 실행할 코드
  console.log(i, sum); // 현재 숫자와 누적 합계 출력
}

console.log('합계', sum); // 최종 합계 출력

// 1부터 몇까지 더하면 10000이 넘을까? (while)
sum = 0;
let count = 1;
while (sum < 10000) {
  sum += count;
  count++;
}

console.log(--count, sum); // 10000을 넘기기 직전의 숫자와 합계 출력

// 1부터 10까지의 숫자를 순차적으로 출력
for (let i=1; i<=10; i++){
  console.log(i);
}

// 1부터 10까지 홀수의 합계 출력 (1, 3, 5, 7, 9의 합)
sum = 0;
for (let i=1; i<=10; i+=2) { // i를 2씩 증가시켜 홀수만 처리
  sum += i;
}
console.log('홀수 합계', sum);

// 1부터 10까지 짝수의 합계 출력 (2, 4, 6, 8, 10의 합)
sum = 0;
for (let i=1; i<=10; i++) {
  if(i % 2 === 0) sum += i; // 짝수인 경우에만 합계에 더함
}
console.log('짝수 합계', sum);
