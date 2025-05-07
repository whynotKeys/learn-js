"use strict";
// 인터페이스 정의 - 선택적 속성, 읽기 전용 속성
(() => {
    const todo1 = {
        id: 1,
        title: "할일1",
        content: "내용1",
        done: false,
    };
    const todo2 = {
        id: 2,
        title: "할일2",
        content: "내용2",
    };
    console.log(todo1);
    console.log(todo2);
    // todo2.id = 5; // readonly값 수정 시 에러 발생
    todo2.title = "할일2-수정";
    console.log(todo2);
})();
