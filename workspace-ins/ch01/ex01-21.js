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

let sum = 0;
for (let i=1; i <= 10; i++) { // 초기화, 조건식, 증감식
  sum += i; // 실행할 코드
  console.log(i, sum);
}

console.log('합계', sum);

// 1부터 몇까지 더하면 10000이 넘을까? (while)
sum = 0;
let count = 1;
while (sum < 10000) {
  sum += count;
  count++;
}

console.log(--count, sum);


// 1부터 10까지 출력
for (let i=1; i<=10; i++){
  console.log(i);
}

// 1부터 10까지 홀수의 합계 출력. 25
sum = 0;
for (let i=1; i<=10; i+=2) {
  sum += i;
}
console.log('홀수 합계', sum);

// 1부터 10까지 짝수의 합계 출력. 30
sum = 0;
for (let i=1; i<=10; i++) {
  if(i % 2 === 0) sum += i;
}
console.log('짝수 합계', sum);
