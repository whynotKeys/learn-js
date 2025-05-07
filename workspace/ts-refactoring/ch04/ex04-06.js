"use strict";
(() => {
    // ex02-23.js 복사
    (() => {
        // 지정한 수가 소수인지 여부를 반환
        let isPrime = function (num) {
            // 소수 판별 코드
            let prime = true; // 소수 여부
            //무식한 방법
            // for (let i = 2; i < num/2; i++) { 반보다 적게
            for (let i = 2; i <= Math.sqrt(num); i++) {
                //제곱근
                if (num % i === 0) {
                    prime = false; // 소수가 아니면 false로 변경
                    break; // 반복문 탈출
                }
            }
            return prime; // 소수 여부 반환
        }.memoize();
        // isPrime 함수에 메모이제이션 기능 추가 : 위에서 추가함
        // isPrime = isPrime.memoize();
        console.time("소요시간");
        console.log("3 -> ", isPrime(3));
        console.log("4 -> ", isPrime(4));
        console.log("5 -> ", isPrime(5));
        console.log("6 -> ", isPrime(6));
        console.log("7 -> ", isPrime(7));
        console.log("8 -> ", isPrime(8));
        console.log("9 -> ", isPrime(9));
        console.log("1000000007 -> ", isPrime(1000000007));
        console.log("1000000007 -> ", isPrime(1000000007));
        console.log("1000000007 -> ", isPrime(1000000007));
        console.timeEnd("소요시간");
    })();
    // 즉시실행 함수로 만들어서 여러번 실행해도 오류 X
})();
