"use strict";
// echo 함수 - 제네릭 타입 제약
// ex06-17-02.ts 복사
(() => {
    // T가 아님 아무 문자나 사용 가능하지만 관례적으로 type의 첫 글자인 T를 많이 사용함
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    // console.log(echo<boolean>(true)); // 타입 에러
    const str = echo("hello");
    const num = echo(3.14159265359);
    console.log(str.toUpperCase(), num.toFixed(2));
    console.log("---------------------------");
    // length가 number인 객체만 허용
    function echo2(msg) {
        return msg;
    }
    // echo2(100); // 조건에 맞지 않아 에러 발생 (length 속성 없음)
    const str2 = echo2("hello");
    const num2 = echo2([10, 20]);
    console.log(str2.length, num2.length);
})();
