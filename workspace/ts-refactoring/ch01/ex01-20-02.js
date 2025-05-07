"use strict";
(() => {
    /*
    반복문 - while문
    */
    // 1부터 10까지 홀수의 합계 출력하기
    let i = 1;
    let sumOdd = 0;
    while (i <= 10) {
        if (i % 2 === 1) {
            sumOdd += i;
        }
        i++;
    }
    console.log("홀수의 합계:", sumOdd);
    //1부터 10까지 짝수의 합계 출력
    i = 1;
    let sumEven = 0;
    while (i <= 10) {
        if (i % 2 === 0) {
            sumEven += i;
        }
        i++;
    }
    console.log("짝수의 합계:", sumEven);
    //1부터 10까지 홀수/짝수의 합계 한 번에 출력
    i = 1;
    sumOdd = 0;
    sumEven = 0;
    while (i <= 10) {
        if (i % 2 === 0) {
            sumEven += i;
        }
        else {
            sumOdd += i;
        }
        i++;
    }
    console.log(`홀수의 합계: ${sumOdd}\n짝수의 합계: ${sumEven}`);
})();
