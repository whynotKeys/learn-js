"use strict";
// 비동기 함수 - Promise 사용
// 비동기 함수를 사용하는 함수도 비동기 함수가 됨
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 Promise 사용
// 에러 처리 추가
// 체인 방식으로 호출
// ex08-08-02.ts 복사
(() => {
    function f1() {
        return new Promise((resolve, reject) => {
            console.log("\t3. f1 호출됨.");
            const delay = Math.floor(Math.random() * 1000 * 1);
            console.log(`\t4. ${delay}ms 동안 작업중...`);
            setTimeout(() => {
                console.log(`\t f1 작업 완료.`, delay);
                if (delay < 500) {
                    resolve('f1 작업 결과.' + delay);
                }
                else {
                    reject('f1 작업 실패 :' + delay);
                }
            }, delay);
            console.log("\t5. f1 리턴됨.");
        });
    }
    function test() {
        console.log("\t2. test 호출됨.");
        f1().then(f1).then(f1).then(result => {
            console.log("3개의 f1 작업이 모두 성공한 후에 호출", result);
        }).catch(reason => {
            console.log('셋 중 하나라도 작업이 실패할 경우 호출 ', reason);
        });
        console.log("\t6. test 리턴됨");
    }
    // FIXME 프로그램 실행 흐름에 맞춰서 콘솔 출력 메세지 앞에 번호 추가
    console.log("1. 작업 시작.");
    test();
    console.log("7. 작업 종료.");
})();
