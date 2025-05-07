"use strict";
// 주요 내장 함수 - setTimeout
(() => {
    console.log("시작");
    setTimeout("console.log(100)", 1000 * 0); // 문자열로 코드 작성해서 바로 넣을 수 있음
    // 숫자 2개를 받아서 1초 후에 합을 주는 함수를 timerId에 저장
    const timerId = setTimeout((a, b) => {
        console.log("1초 후에 실행됩니다.", a + b);
    }, 1000 * 1, 10, 20);
    setTimeout(() => {
        console.log("3초 후에 실행됩니다.");
    }, 1000 * 3);
    console.log("종료");
    // timeout 작업 취소
    clearTimeout(timerId);
})();
