"use strict";
// echo 함수 - 제네릭 함수
// ex06-17.ts 복사
(() => {
    // T가 아님 아무 문자나 사용 가능하지만 관례적으로 type의 첫 글자인 T를 많이 사용함
    function echo(msg) {
        return msg;
    }
    console.log(echo("hello"));
    console.log(echo(100));
    console.log(echo(true));
    function echor(result) {
        let value;
        if (result === 100) {
            value = "백점";
        }
        else if (result === 0) {
            value = "빵점";
        }
        else {
            value = "몰라";
        }
        return value;
    }
    console.log(echor(100));
    console.log(echo(100)); // 유니온 타입도 됨
    console.log(echo(false)); // 타입 별칭도 됨
})();
