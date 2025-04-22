/*
2차원 배열 예제
- 배열 안에 배열이 있는 형태
- 행렬(matrix) 형태의 데이터를 표현할 때 유용
*/

// 2차원 배열 선언 및 초기화
// 각 행의 길이가 다른 불규칙한 2차원 배열
const numbers = [
  [2, 4, 6, 8, 10],   // 0번 행: 5개의 요소
  [3, 6, 9],          // 1번 행: 3개의 요소
  [4, 8, 12, 16],     // 2번 행: 4개의 요소
  [5, 10, 15, 20],    // 3번 행: 4개의 요소
  [6, 12, 18, 24]     // 4번 행: 4개의 요소
];

// 행 단위로 접근
console.log(numbers[0]); // [2, 4, 6, 8]
console.log(numbers[1]); // [3, 6, 9, 12]
console.log(numbers[2]); // [4, 8, 12, 16]
console.log(numbers[3]); // [5, 10, 15, 20]

// 특정 요소에 접근: [행인덱스][열인덱스]
console.log(numbers[0][2]); // 6  (0번 행의 2번 열)
console.log(numbers[3][2]); // 15 (3번 행의 2번 열)

// 중첩 반복문을 사용한 2차원 배열 순회
let sum = 0;
for (let i=0; i<numbers.length; i++) {
  const row = numbers[i]; // 현재 행을 가져옴
  for (let k=0; k<row.length; k++) {
    console.log(row[k]);  // 현재 행의 각 요소 출력
    sum += row[k];        // 현재 요소를 합계에 더함
  }
}

// 이훈진
// for (const row of numbers) {
//   for (const num of row) {
//     sum += num;
//   }
// }

// 모든 요소의 합계 출력
console.log(sum);