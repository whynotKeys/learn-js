/*
카운터 예제
화살표 함수를 함수 안에 넣으면 해당 함수의 this를 상속받는다.
*/

var count = 0; // var : 전역변수(window)의 count가 됨
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한 명 증가 시킨다.
    this.count++; // this = myObj
    const visit2 = () => {
      this.count++; // this = window
    };
    visit2();
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log("방문자수 : ", myObj.count); // 4
