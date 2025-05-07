"use strict";
(() => {
    /*
    전역 변수와 지역 변수
    */
    /**
     * 지정한 두 수 중 최대값을 반환한다.
     * @param {number} n1
     * @param {number} n2
     * @returns {number} - 최대값
     */
    function max(n1, n2) {
        if (n1 != n2) {
            return Math.max(n1, n2);
        }
        else {
            return "두 값이 동일합니다";
        }
    }
    // if문 안에서 선언한 result를 바깥에서 return해도 에러X. "var"라서... let은 블럭 안에서만 사용되지만 var는 넘나든다
    // TODO hoisting 단원
    function max_(n1, n2) {
        if (n > n2) {
            var result = n1;
        }
        else {
            var result = n2;
        }
        return result;
    }
    console.log(max(10, 20)); // 20
    console.log(max(200, 30)); // 200
    console.log(max(200, 200)); // 200
})();
