/* 20250402 재현님이 주신 문제

for문을 이용해서 아래와 같이 출력하기
0 1 2 3 4 5 6 7 8 9
1 2 3 4 5 6 7 8 9 0
2 3 4 5 6 7 8 9 0 1 
3 4 5 6 7 8 9 0 1 2 
4 5 6 7 8 9 0 1 2 3 
5 6 7 8 9 0 1 2 3 4 
6 7 8 9 0 1 2 3 4 5 
7 8 9 0 1 2 3 4 5 6 
8 9 0 1 2 3 4 5 6 7 
9 0 1 2 3 4 5 6 7 8 

*/

/* 졸려서 반칙 씀;; */

// let lines = 10;
// let numbers = ["0 ", "1 ", "2 ", "3 ", "4 ", "5 ", "6 ", "7 ", "8 ", "9 "];

// for (let i = 0; i < lines; i++) {
//   print = numbers[i];
//   for (let k = 1; k < lines; k++) {
//     if (i + k >= 10) {
//       print += numbers[i + k - 10];
//     } else {
//       print += numbers[i + k];
//     }
//   }
//   console.log(print);
// }

/* 풀었다!!! */

let lines = 10;
for (let i = 0; i < lines; i++) {
  let numbers = ""; // 출력할 내용 초기화

  for (let k = 0; k < lines; k++) {
    // i+k 값을 numbers에 추가
    if (i + k < lines) {
      numbers += `${i + k} `;
    } else {
      numbers += `${i + k - lines} `; //  i+k 값이 10 이상인 경우 lines만큼 빼주어 한자릿수 유지
    }
  }

  console.log(numbers);
}

// 아현님 코드
for (let i = 0; i < 10; i++) {
  // i를 0부터 9까지 증가하는 변수, 줄 생성
  let reset = ""; // 각 줄이 시작할 때마다 문자열 초기화, 초기화 안하면 이전 줄에 내용이 남아 계속 추가됨.
  for (let k = i; k < i + 10; k++) {
    // k를 각 줄에서 출력할 숫자 하나하나를 담당하는 변수로 i부터 i+9까지 반복함.
    reset += k % 10; // %는 나머지를 구하는 연산자. k를 10으로 나눈 나머지를 의미하여 숫자가 10이 넘어가도 다시 0~9 사이에서 반복되도록 함. (i = 3일 때 k 값은 3~12, k % 10을 하면 3 4 5 6 7 8 9 0 1 2가 됨.)
    reset += " "; // 각 숫자 사이에 공백을 추가하여 보기 쉽게 만들기 위함.
  }
  console.log(reset);
}

/* for문을 사용해서 *문자로 흥미로운 모양 만들기 */
/*

 *        *
  *      *
   *    *
    *  *
     **
     **
    *  *
   *    *
  *      *
 *        *
 *        *
  *      *
   *    *
    *  *
     **
     **
    *  *
   *    *
  *      *
 *        *

 */

let character = "*";
let set = 2;
let width = 10;
let space = " ";

// 테스트 코드
// space = " ";
// let space2 = "   ";
// console.log(`히히히${space+space+space}히히히`);
// console.log(`히히히${space+space}히히히`);
// console.log(`히히히${space2-space}히히히`);

for (let i = 1; i <= set; i++) {
  for (let k = 1; k <= width; k++) {
    let innerSpace = ""; // 별 안쪽 여백
    let outerSpace = ""; // 별 바깥쪽(=앞쪽) 여백

    // 1~5번째 줄과 6~10번째 줄에 들어갈 여백 계산
    if (k <= width / 2) {
      outerSpace = space.repeat(k - 1);
      innerSpace = space.repeat(width - k * 2);
    } else {
      outerSpace = space.repeat(width - k);
      innerSpace = space.repeat(2 * (k - width / 2 - 1)); // 여기 들어갈 식만 AI에게 물어봄
    }
    console.log(`${outerSpace}${character}${innerSpace}${character}`);
  }
}
