"use strict";
// 함수에 타입 지정
(() => {
    function getCount(count) {
        return "Count: " + count;
    }
    // : string 부분은 생략 가능
    let result = getCount(20);
    console.log(result);
})();
