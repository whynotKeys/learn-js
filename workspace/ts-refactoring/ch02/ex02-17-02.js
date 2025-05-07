/*
카운터 예제
*/

var count = 0; // var : 전역변수(window)의 count가 됨
const myObj = {
  count: 0,
  visit: function () {
    // 방문자를 한 명 증가 시킨다.
    this.count++; // this = myObj
    const visit2 = function () {
      this.count++; // this = myObj
    };
    visit2.call(this); // this = myObj (myObj안쪽이라서)
  },
};

myObj.visit(); // this = myObj
myObj.visit();
console.log("방문자수 : ", myObj.count); // 4
