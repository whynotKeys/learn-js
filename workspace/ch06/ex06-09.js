"use strict";
// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사
(() => {
    const u1 = {
        name: "하루",
        age: 5,
    };
    const u2 = {
        name: "나무",
        age: 8,
        color: "brown",
    };
    console.log(u1.age, u2.name, u2.color?.toUpperCase());
    console.log(u2);
})();
