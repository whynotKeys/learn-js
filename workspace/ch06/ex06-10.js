"use strict";
// 인터페이스 사용 - 변수, 함수의 매개변수, 리턴타입
// ex06-09.ts 복사
(() => {
    // 인터페이스로 객체의 타입을 지정
    const u1 = {
        name: "하루",
        age: 5,
    };
    const u2 = {
        name: "나무",
        age: 8,
    };
    // 함수의 리턴 타입으로 인터페이스 지정
    const createUser = function (name, age) {
        return { name, age };
    };
    const u3 = createUser("유저3", 23);
    // 함수의 매개변수의 타입으로 인터페이스 지정
    function getAge(user) {
        return user.age;
    }
    console.log(getAge(u1));
    console.log(getAge(u2));
    console.log(getAge(u3));
    console.log(u1.age, u2.name.toUpperCase());
})();
