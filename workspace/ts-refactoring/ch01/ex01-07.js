"use strict";
(() => {
    /*
    기본 데이터 타입 - BigInt
    */
    // js의 number는 부동소수점 방식을 사용해서 모든 숫자를 소수로 표현.
    // 컴퓨터는 2진수로 표현해서 2의 배수를 제외한 10진수의 숫자를 정확히 표현할 수 없음.
    var maxNum = Number.MAX_VALUE; // number로 표현 가능한 최대값
    var maxSafeNum = Number.MAX_SAFE_INTEGER; // 정확한 정수의 최대값 (9007199254740991, 약 9000조)
    console.log(maxNum, maxSafeNum);
    console.log(maxSafeNum - 1, maxSafeNum, maxSafeNum + 1, maxSafeNum + 2, maxSafeNum + 3);
    // BigInt
    var b1 = 12345n;
    var b2 = BigInt(maxSafeNum);
    console.log(b2 - 1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);
})();
