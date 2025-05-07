"use strict";
(() => {
    /*
      함수 생성 2 (표현식)
    */
    // 표현식 방식의 함수 선언(익명함수)
    const add = function (a, b) {
        const result = a + b;
        return result;
    };
    console.log(add(10, 20));
})();
