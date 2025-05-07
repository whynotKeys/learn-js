"use strict";
(() => {
    /*
    기본값 매개변수(Default parameters)
    */
    // b가 전달되지 않을 경우 a만 반환
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(50)); // 위 함수만 있는 경우 NaN값이 나옴
    function sum(a, b) {
        // 선언문으로 만든 함수는 중복 선언 가능 : 마지막에 선언한 함수가 사용됨
        // b가 undefined일 경우 a만 반환
        if (b === undefined) {
            return a;
        }
        else {
            return a + b;
        }
    }
    function sum(a, b) {
        if (b === undefined)
            b = 0;
        return a + b;
    }
    function sum(a, b) {
        b = b || 0; // b가 undefined인 경우 0으로 초기화
        return a + b;
    }
    function sum(a, b = 0) {
        return a + b;
    }
    console.log(sum(10, 20)); // 30
    console.log(typeof sum(50)); // number
    console.log(sum(50)); // 50
})();
