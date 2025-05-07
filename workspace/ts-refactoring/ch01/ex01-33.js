/*
반환값이 있는 함수
*/

add(); // 110
add(); // 110

add100(10); // 110
add100(20); // 120

sum(10, 20); // 30
sum(30, 40); // 70

// 10 + 100의 결과를 출력하는 함수
function add() {
  let result = 100 + 10;
  console.log(result);
}

// 전달 받은 숫자와 100의 합계를 출력하는 함수
function add100(number) {
  let result = 100 + number;
  console.log(result);
}

// 전달 받은 두 숫자의 합계를 출력하는 함수
function sum(num1, num2) {
  let result = num1 + num2;
  console.log(result);
}

// 전달 받은 두 숫자의 합계를 반환하는 함수
function getSum(num1, num2) {
  let result = num1 + num2;
  return result;
}

let returnVal = getSum(40, 50);
console.log(returnVal);
