"use strict";
(() => {
    /*
      함수 생성 2 (표현식)
    */
    // 표현식 방식의 함수 선언(기명함수)
    // 재귀함수로 사용하지 않는 이상 기명함수는 잘 쓰지 않는다.
    const add = function sum(a, b) {
        const result = a + b;
        return result;
    };
    console.log(add(10, 20));
    console.log(sum(10, 20)); // 이런 식으로 호출 불가
})();
