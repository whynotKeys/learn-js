/*
반복문 - while문
*/

// 0부터 10까지 출력하기
let i = 0;
while (i <= 10) {
  console.log(i++);
}
//1부터 10까지 모든 수의 합계를 출력
i = 1; // 초기화
let sum = 0;

while (i <= 10) {
  sum += i;
  i++;
}

console.log(sum);

// 내가 푼 거 근데 아직 안 배웠지...
// let sum = 0;

// for (let i = 1; i <= 10; i++) {
//   sum += i;
// }
// console.log(sum);

// let summed = 0;
// summed += 1;
// summed += 2;
// summed += 3;
// summed += 4;
// summed += 5;
// summed += 6;
// summed += 7;
// summed += 8;
// summed += 9;
// summed += 10;

// console.log(summed);
