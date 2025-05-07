(() => {
  /*
  카운터 예제
  */
  
  var count = 0; // var : 전역변수(window)의 count가 됨
  const myObj = {
    count: 0,
    visit: function () {
      // 방문자를 한 명 증가 시킨다.
      this.count++; // this = myObj
      const visitN = function (n) {
        this.count += n; // this = window
      };
  
      // 방문자를 2명 증가 시킨다.
      visitN.call(this, 2);
      visitN.call(this, 2);
  
      // 방문자를 3명 증가 시킨다.
      const visit3 = visitN.bind(this, 3);
      visit3();
      visit3();
    },
  };
  
  myObj.visit();
  myObj.visit();
  console.log("방문자수 : ", myObj.count);
  
})();
