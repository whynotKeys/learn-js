"use strict";
(() => {
    // // 전역변수로 설정 -> 메소드랑 이름 겹칠 시 덮어 써버림
    // var alert = "출입 금지";
    // console.log(alert);
    // // 함수로 생성 -> 마찬가지로 이름 겹칠 가능성 있음
    // function alert() {
    //   var alert = "출입 금지";
    //   console.log(alert);
    // }
    // alert();
    // 즉시실행 함수 : 이름 겹쳐도 문제 없음
    (() => {
        var alert = "출입 금지";
        console.log(alert);
    })();
    alert("오지 마세요");
    // ※ 즉시실행 함수 기본 틀
    (() => { })();
})();
