/* 
if문의 다양한 사용 예제

지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, *, / 만 입력가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력

ex01-18-05를 switch case로 전환
*/

const operator = "/";
const n1 = 10;
const n2 = 20;

let result; // 결과값

switch (operator) {
  case "+":
    result = n1 + n2;
    break;
  case "-":
    result = n1 - n2;
    break;
  case "*":
    result = n1 * n2;
    break;
  case "/":
    if (n2 === 0) {
      result = "잘못된 입력: 0으로 나눌 수 없습니다.";
      break;
    }
    result = n1 / n2;
    break;
  default:
    result = "잘못된 입력: 연산자는 +, -, *, /만 입력 가능합니다.";
    break;
}
console.log(result);

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const day = 1;
let weekday;

if (1 <= day && day <= 7) {
  switch (day) {
    case 1:
      weekday = "월요일";
      break;
    case 2:
      weekday = "화요일";
      break;
    case 3:
      weekday = "수요일";
      break;
    case 4:
      weekday = "목요일";
      break;
    case 5:
      weekday = "금요일";
      break;
    case 6:
      weekday = "토요일";
      break;
    case 7:
      weekday = "일요일";
      break;
  }
  console.log(weekday);
} else {
  console.log("잘못된 입력: 1 ~ 7 사이의 정수만 입력해주세요.");
}

/*
1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
봄: 4 월, 여름: 5 ~ 10월, 가을: 11월, 겨울: 12 ~ 3월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const month = 11;
let season;

if (1 <= month && month <= 12) {
  switch (month) {
    case 1:
    case 2:
    case 3:
      season = "겨울";
      break;
    case 4:
      season = "봄";
      break;
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      season = "여름";
      break;
    case 11:
      season = "가을";
      break;
    case 12:
      season = "겨울";
      break;
  }
  console.log(season);
} else {
  console.log("잘못된 입력: 1 ~ 12 사이의 정수만 입력해주세요.");
}
