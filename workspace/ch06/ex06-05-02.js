"use strict";
// 유니언 타입과 타입 가드
(() => {
    // FIXME: print 함수의 타입을 정의하고 msg의 타입에 따라서 결과값 출력
    function print(msg) {
        if (typeof msg === "string") {
            // 타입 가드 : string일 경우
            console.log(`${msg} 글자수: ${msg.length}`);
        }
        else if (typeof msg === "number") {
            // 타입 가드 : number 경우
            console.log(`${msg} + 10 = ${msg + 10}`);
        }
        else {
            // 타입 가드 : boolean일 경우
            console.log(`${msg}: ${msg ? "참" : "거짓"}`);
        }
    }
    print("world");
    print(200);
    print(false);
})();
