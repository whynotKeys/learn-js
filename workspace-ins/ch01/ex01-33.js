/*
매개변수와 반환값이 있는 함수와 없는 함수
*/

// TODO hoisting 단원에서 다시 설명
add(); // 110
add(); // 110

add100(10); // 110
add100(20); // 120

sum(10, 20); // 30
sum(30, 40); // 70

/**
 * 10과 100의 합계를 콘솔에 출력하는 함수
 * @returns {void} 반환값 없음
 */
function add(){
  const n1 = 10;
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

/**
 * 입력받은 숫자와 100의 합계를 콘솔에 출력하는 함수
 * @param {number} n1 - 100과 더할 숫자
 * @returns {void} 반환값 없음
 */
function add100(n1){
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

/**
 * 두 숫자의 합계를 콘솔에 출력하는 함수
 * @param {number} n1 - 첫 번째 숫자
 * @param {number} n2 - 두 번째 숫자
 * @returns {void} 반환값 없음
 */
function sum(n1, n2){
  const result = n1 + n2;
  console.log(result);
}

/**
 * 두 숫자의 합계를 반환하는 함수
 * @param {number} n1 - 첫 번째 숫자
 * @param {number} n2 - 두 번째 숫자
 * @returns {number} 두 숫자의 합계
 */
function getSum(n1, n2) {
  const result = n1 + n2;
  return result;
}

let returnVal = getSum(40, 50);
console.log(returnVal);


/* ❤️❤️❤️❤️❤️ 조현수 ❤️❤️❤️❤️❤️
// 10+100 결과를 출력한다
function add() {
  let n1 = 10;
  let n2 = 100;
  let answer = n1 + n2;
  return answer;
  console.log(answer);
}
add();
add();
// 전달받은 숫자와 100의 합계를 출력하는 함수
function add100(a) {
  console.log(a + 100);
}
add100(10);
add100(20);
// 전달받은 두 숫자의 합계를 출력하는 함수

function sum(a, b) {
  console.log(a + b);
}
sum(30, 40);
sum(10, 20);
*/