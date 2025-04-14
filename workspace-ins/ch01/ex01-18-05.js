/*
if문의 다양한 사용 예제
이 파일은 if문을 사용한 다양한 예제들을 보여줍니다.
*/

/*
지정한 연산자와 숫자를 받아서 사칙 연산을 수행하는 프로그램
연산자는 +, -, * , / 만 입력 가능
잘못된 연산자를 입력할 경우 "잘못된 입력" 출력
*/
// 기본 변수 설정
let operator = '+';  // 연산자 변수
let n1 = 10;         // 첫 번째 숫자
let n2 = 20;         // 두 번째 숫자

// 기본 if-else 문을 사용한 사칙연산 구현
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

// 이도울
if (operator === "+") {
  console.log(`${n1}${operator}${n2} = ${n1 + n2}`);
} else if (operator === "-") {
  console.log(`${n1}${operator}${n2} = ${n1 - n2}`);
} else if (operator === "*") {
  console.log(`${n1}${operator}${n2} = ${n1 * n2}`);
} else if (operator === "/") {
  console.log(`${n1}${operator}${n2} = ${n1 / n2}`);
} else {
  console.log("잘못된 입력입니다.");
} 

// 조현수
let sum = 0;
if (operator == "+") {
  sum = n1 + n2;
} else if (operator == "-") {
  sum = n1 - n2;
} else if (operator == "*") {
  sum = n1 * n2;
} else if (operator == "/") {
  sum = n1 / n2;
  if (n1 === 0 || n2 === 0) {
    console.log("0으로 나눌수 없습니다.");
  }
} else if (
  !(operator && operator == "-" && operator == "*" && operator == "/")
) {
  console.log("잘못된 입력");
}
console.log(`${n1} ${operator} ${n2} = ${sum}`);

// 오서현
let result;

if (operator === "+") {
  result = n1 + n2;
  // console.log(`${n1} + ${n2} = ${result}`);
} else if (operator === "-") {
  result = n1 - n2;
  // console.log(`${n1} - ${n2} = ${result}`);
} else if (operator === "*") {
  result = n1 * n2;
  // console.log(`${n1} * ${n2} = ${result}`);
} else if (operator === "/") {
  result = n1 / n2;
  // console.log(`${n1} / ${n2} = ${result}`);
} else {
  console.log("잘못된 입력");
}
console.log(`${n1} ${operator} ${n2} = ${result}`);

// 김태경
/*
+
3
4

-> toString()후
+\r\n3\r\n4\r\n

-> trim()후
+\r\n3\r\n4

-> split('\n')
input = ['+\r', '3\r', '4']

const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
// console.log(input);

operator = input[0].trim();

n1 = 10;
n2 = 20;

if(operator === "+"){
    console.log(n1 + n2);
}

else if(operator == "-"){
    console.log(n1 - n2);
}

else if(operator == "*"){
    console.log(n1 * n2);
}

else if(operator == "/"){
    console.log(n1 / n2);
}

else{
    console.log("잘못된 입력");
}
*/

/*
1 ~ 7 사이의 숫자를 받아서 해당 요일을 출력하는 프로그램
1은 월요일, 2는 화요일, ... 7은 일요일
1 ~ 7 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/
let day = 7;  // 요일을 나타내는 숫자 (1-7)

// if-else 문을 사용한 요일 출력
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

// 김태경
/*
day = parseInt(input[1]);

if(day == 1) console.log("월요일");
else if(day == 2) console.log("화요일");
else if(day == 3) console.log("수요일");
else if(day == 4) console.log("목요일");
else if(day == 5) console.log("금요일");
else if(day == 6) console.log("토요일");
else if(day == 7) console.log("일요일");
else console.log("잘못된 입력");
*/

/*
1 ~ 12 사이의 월을 받아서 계절을 출력하는 프로그램
봄: 4월, 여름: 5 ~ 10, 가을: 11, 겨울: 12 ~ 3
1 ~ 12 사이의 숫자가 아닐 경우 "잘못된 입력" 출력
*/
let month = 4;  // 월을 나타내는 숫자 (1-12)

// if-else 문을 사용한 계절 출력
if (month === 4) {
  console.log('봄');
} else if (month === 5 || month === 6 || month === 7 || month === 8 || month === 9) {
  console.log('여름');
} else if (month === 11) {
  console.log('가을');
} else if (month === 12 || month === 1 || month === 2 || month === 3) {
  console.log('겨울');
} else {
  console.log('잘못된 입력');
}

// 김태경
/*
month = parseInt(input[2]);

if(month >= 3 && month <= 5) console.log("봄");
else if(month >= 6 && month <= 8) console.log("여름");
else if(month >= 9 && month <= 11) console.log("가을");
else if(month == 12 && month > 0 && month <= 2) console.log("겨울");
else console.log("잘못된 입력");
*/
