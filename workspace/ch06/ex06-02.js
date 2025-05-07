"use strict";
// 기본 타입
(() => {
    let str = "Hello";
    let age = 9;
    let done = true;
    // done = 'false'; // 문자열 들어가면 컴파일 에러 발생
    let nullVal = null;
    let emptyVal;
    let todo = { title: "TypeScript Study", done: false };
    let todoListStr = ["JS", "TS"]; // 문자열 배열1
    let todoListStr2 = ["React", "Next.js"]; // 문자열 배열2
    let todoListNum = [1, 2, 3]; // 숫자 배열
    // tuple : 배열의 길이가 고정되고 각 요소의 타입이 정의된 타입.
    let items = ["타스핑", 8];
    // any : 모든 타입을 허용. 사용 지양함!!
    let userName = "이화수";
    // userName = '217'
    let userName2 = "TSping";
    // userName2 = 540; // 타입가드 없으면 에러 나면서 컴파일 불가
    console.log(userName.toUpperCase());
    if (typeof userName2 === "string") {
        // 타입 가드
        console.log(userName2.toUpperCase());
    }
})();
