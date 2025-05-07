"use strict";
// 유니언 타입(union type)
(() => {
    function logString(msg) {
        console.log(msg);
    }
    function logNumber(msg) {
        console.log(msg);
    }
    // 유니언 타입
    function logBoth(msg) {
        console.log(msg);
    }
    logString("Hello");
    logNumber(123);
    logBoth("Hello");
    logBoth(123);
})();
