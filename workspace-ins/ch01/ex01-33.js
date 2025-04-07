/*
반환값이 있는 함수
*/

add(); // 110
add(); // 110

add100(10); // 110
add100(20); // 120

sum(10, 20); // 30
sum(30, 40); // 70

// 10 + 100의 결과를 출력하는 함수 (add)
function add(){
  const n1 = 10;
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

// 전달받은 숫자와 100의 합계를 출력하는 함수 (add100)
function add100(n1){
  const n2 = 100;
  const result = n1 + n2;
  console.log(result);
}

// 전달받은 두 숫자의 합계를 출력하는 함수 (sum)
function sum(n1, n2){
  const result = n1 + n2;
  console.log(result);
}

// 전달받은 두 숫자의 합계를 반환하는 함수 (getSum)
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