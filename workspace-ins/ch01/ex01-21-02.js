/*
for문을 사용한 다양한 별찍기 패턴 연습
*/

/*
*
**
***
****
*****
*/
const lines = 5;  // 전체 줄 수를 정의

// 왼쪽 정렬 삼각형 출력
for (let i = 0; i < lines; i++) {
  let star = '';
  for (let k = 0; k <= i; k++) {
    star += '*';
  }
  console.log(star);
}

/*
*****
****
***
**
*
*/
// 역순 왼쪽 정렬 삼각형 출력 (하트 사용)
for (let i = lines; i >= 1; i--) {
  let star = '';
  for (let k = 0; k < i; k++) {
    star += '❤️ ';
  }
  console.log(star);
}

/*
    *
   **
  ***
 ****
*****
*/
// 오른쪽 정렬 삼각형 출력
for (let i = 0; i < lines; i++) {
  let space = '';
  let star = '';
  // 공백 생성 (줄 번호에 따라 공백 수 감소)
  for (let k = 0; k < lines-i-1; k++) {
    space += ' ';
  }
  // 별 생성
  for (let k = 0; k <= i; k++) {
    star += '*';
  }
  console.log(space + star);
}

/*
    *
   ***
  *****
 *******
*********
*/
// 피라미드 출력
for (let i = 0; i < lines; i++) {  // i: 현재 줄 번호 (0부터 시작)
  let space = '';  // 공백 문자열 초기화
  let star = '';   // 별 문자열 초기화
  
  // 공백 생성: 각 줄마다 (전체 줄 수 - 현재 줄 번호 - 1)개의 공백 생성
  for (let k = 0; k < lines-i-1; k++) {
    space += ' ';
  }
  
  // 별 생성: 각 줄마다 (2*줄 번호 + 1)개의 별 생성 (1, 3, 5, 7, 9...)
  for (let k = 0; k < 2*i+1; k++) {
    star += '*';
  }
  
  console.log(space + star);  // 공백과 별을 합쳐서 출력
}

/*
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
*/
// 다이아몬드 출력
// 상단 피라미드 부분 (0부터 lines-1까지)
for (let i = 0; i < lines; i++) {  // i: 현재 줄 번호
  let space = '';  // 공백 문자열 초기화
  let star = '';   // 별 문자열 초기화
  
  // 공백 생성: 각 줄마다 (전체 줄 수 - 현재 줄 번호 - 1)개의 공백 생성
  for (let k = 0; k < lines-i-1; k++) {
    space += ' ';
  }
  
  // 별 생성: 각 줄마다 (2*줄 번호 + 1)개의 별 생성
  for (let k = 0; k < 2*i+1; k++) {
    star += '*';
  }
  
  console.log(space + star);  // 공백과 별을 합쳐서 출력
}

// 하단 역피라미드 부분 (lines-2부터 0까지)
for (let i = lines-2; i >= 0; i--) {  // i: 현재 줄 번호 (중앙 줄 제외하고 역순)
  let space = '';  // 공백 문자열 초기화
  let star = '';   // 별 문자열 초기화
  
  // 공백 생성: 각 줄마다 (전체 줄 수 - 현재 줄 번호 - 1)개의 공백 생성
  for (let k = 0; k < lines-i-1; k++) {
    space += ' ';
  }
  
  // 별 생성: 각 줄마다 (2*줄 번호 + 1)개의 별 생성
  for (let k = 0; k < 2*i+1; k++) {
    star += '*';
  }
  
  console.log(space + star);  // 공백과 별을 합쳐서 출력
}
