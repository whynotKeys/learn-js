/* 
if문의 다양한 사용 예제

지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, *, / 만 입력가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/

const operator = "*";
const n1 = 10;
const n2 = 20;

let result; // 결과값

if (operator === "+") {
  result = n1 + n2;
} else if (operator === "-") {
  result = n1 - n2;
} else if (operator === "*") {
  result = n1 * n2;
} else if (operator === "/") {
  result = n1 / n2;
} else {
  result = "잘못된 입력";
}
console.log(result);

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const day = 2;
let weekday;

if (1 <= day && day <= 7) {
  if (day === 1) {
    weekday = "월요일 싫어";
  } else if (day === 2) {
    weekday = "화요일";
  } else if (day === 3) {
    weekday = "수요일";
  } else if (day === 4) {
    weekday = "목요일";
  } else if (day === 5) {
    weekday = "금요일";
  } else if (day === 6) {
    weekday = "토요일";
  } else {
    weekday = "일요일";
  }

  console.log(weekday);
} else {
  console.log("잘못된 입력");
}

/*
1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
봄: 4 월, 여름: 5 ~ 10월, 가을: 11월, 겨울: 12 ~ 3월
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/

const month = 8;

if (1 <= month && month <= 12) {
  if (month === 4) {
    console.log("봄");
  } else if (5 <= month && month <= 10) {
    console.log("여름");
  } else if (month === 10) {
    console.log("가을");
  } else {
    console.log("겨울");
  }
} else {
  console.log("잘못된 입력");
}
