/*
ex01-18-05.js 복사
switch문의 다양한 사용 예제

*/

/*
사칙연산 프로그램
-----------------
지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, * , / 만 입력 가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/
let operator = '-';  // 연산자 변수 선언
let n1 = 10;         // 첫 번째 숫자
let n2 = 20;         // 두 번째 숫자

// if-else문을 사용한 사칙연산 구현
if (operator === '+') {
  console.log(n1 + n2);
} else if (operator === '-') {
  console.log(n1 - n2);
} else if (operator === '*') {
  console.log(n1 * n2);
} else if (operator === '/') {
  console.log(n1 / n2);
} else {
  console.log('잘못된 입력', operator);
}

// switch문을 사용한 사칙연산 구현
switch (operator) {
  case '+':
    console.log(n1 + n2);
    break;
  case '-':
    console.log(n1 - n2);
    break;
  case '*':
    console.log(n1 * n2);
    break;
  case '/':
    if (n2 === 0) {  // 0으로 나누기 방지
      console.log('0으로 나눌 수 없습니다.');
    } else {
      console.log(n1 / n2);
    }
    break;
  default:
    console.log('잘못된 입력', operator);
}

/*
요일 출력 프로그램
-----------------
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/
let day = 7;  // 요일을 나타내는 숫자 (1-7)

// if-else문을 사용한 요일 출력
if (day === 1) {
  console.log('월요일');
} else if (day === 2) {
  console.log('화요일');
} else if (day === 3) {
  console.log('수요일');
} else if (day === 4) {
  console.log('목요일');
} else if (day === 5) {
  console.log('금요일');
} else if (day === 6) {
  console.log('토요일');
} else if (day === 7) {
  console.log('일요일');
} else {
  console.log('잘못된 입력');
}

// switch문을 사용한 요일 출력
switch (day) {
  case 1:
    console.log('월요일');
    break;
  case 2:
    console.log('화요일');
    break;
  case 3:
    console.log('수요일');
    break;
  case 4:
    console.log('목요일');
    break;
  case 5:
    console.log('금요일');
    break;
  case 6:
    console.log('토요일');
    break;
  case 7:
    console.log('일요일');
    break;
  default:
    console.log('잘못된 입력');
}

/*
계절 출력 프로그램
-----------------
1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
봄: 4월, 여름: 5 ~ 10, 가을: 11, 겨울: 12 ~ 3
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/
let month = 4;  // 월을 나타내는 숫자 (1-12)

// if-else문을 사용한 계절 출력
if (month === 4) {
  console.log('봄');
} else if (month === 5 || month === 6 || month === 7 || month === 8 || month === 9 || month === 10) {
  console.log('여름');
} else if (month === 11) {
  console.log('가을');
} else if (month === 12 || month === 1 || month === 2 || month === 3) {
  console.log('겨울');
} else {
  console.log('잘못된 입력');
}

// switch문을 사용한 계절 출력
switch (month) {
  case 4:
    console.log('봄');
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
    console.log('여름');
    break;
  case 11:
    console.log('가을');
    break;
  case 12:
  case 1:
  case 2:
  case 3:
    console.log('겨울');
    break;
  default:
    console.log('잘못된 입력');
}