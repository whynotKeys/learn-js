"use strict";
// 선택적 파라미터(optional parameter)
// 매개변수 뒤에 ?를 붙이면 optional이라는 뜻
(() => {
    function user(name, age) {
        console.log(name, age);
    }
    user("하루", 5);
    user("내일");
})();
