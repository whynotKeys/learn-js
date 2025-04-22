/*
* 함수 호출 방법 1 - 일반 함수
  - this는 window 객체
*/

function f1() {
  console.log(this);
}
const f2 = function () {
  console.log(this);
};

f1();
f2();
