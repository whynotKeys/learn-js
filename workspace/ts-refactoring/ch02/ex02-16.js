"use strict";
(() => {
    /*
    * 함수 호출 방법 2 - 메서드
      - this는 메서드를 정의한 객체
      - 화살표 함수는 함수 내부에 arguments나 this가 생성되지 않고 상위 컨텍스트의 arguments, this를 사용하게 됨
    */
    // window.name = "global"; // window, 브라우저가 가지고 있는 전역 객체 -> Node.js에서 실행 불가
    // global.name = "global"; // global, Node.js가 가지고 있는 전역 객체 -> 웹브라우저에서 실행 불가
    globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체를 가르킴 -> 둘 가 실행 가능!
    console.log("바깥쪽 this", this); // window 객체
    const getPingName = () => {
        return this.name; // 화살표 함수의 this는 상위 Scope의 this를 찾는다 : window
    };
    const baro = new Object();
    baro.name = "바로바로해핑";
    baro.age = 9;
    baro.getName = getPingName;
    const rara = {
        name: "라라핑",
        age: 8,
        getName: getPingName,
    };
    // 함수 호출방법 1 - 일반 함수로 호출
    console.log(getPingName()); // this : window 객체
    // 함수 호출하는 방법 2 - 메서드로 호출(this는 메서드를 정의한 객체, this는 baro )
    console.log(baro.age, baro.getName()); // getName()의 this는 baro
    console.log(baro.age, rara.getName()); // getName()의 this는 rara
})();
