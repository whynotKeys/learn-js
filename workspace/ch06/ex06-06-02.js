"use strict";
// 유니언 타입에 타입 별칭 지정
// ex06-06.ts 복사
(() => {
    function logMessage(msg) {
        console.log(msg);
    }
    function warnMessage(msg) {
        // 스타일 적용
        console.log(`%c${msg}`, "color: yellow; font-size: 20px;");
        console.log(`%c${msg}`, "color: skyblue; font-size: 15px;");
    }
    logMessage("hello");
    logMessage(100);
    warnMessage("bye");
    warnMessage(200);
})();
