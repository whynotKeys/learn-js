"use strict";
// 인터페이스 다중 상속
(() => {
    const todo1 = {
        title: '할일1',
        content: '내용1'
    };
    const todo2 = {
        id: 2,
        title: '할일2',
        done: false,
    };
    const todo3 = {
        id: 3,
        title: '할일3',
        content: '내용3',
        done: false,
        createdAt: new Date(),
        updatedAt: new Date()
    };
    console.log(todo1, todo2, todo3);
})();
