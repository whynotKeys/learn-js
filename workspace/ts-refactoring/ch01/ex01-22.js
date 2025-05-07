"use strict";
(() => {
    /*
    반복문 - break, continue
    */
    // n ~ m 까지의 정수 중에서 첫번 째 짝수를 찾아서 출력하세요. (n은 항상 m보다 작다)
    const n = 1;
    const m = 10;
    for (i = n; i <= m; i++) {
        if (i % 2 === 0) {
            console.log(`${n}과 ${m} 사이의 가장 작은 짝수는 ${i}입니다.`);
            break;
        }
    }
    // break 안 쓰면 이렇게도 할 수 있을 듯
    let minEven;
    for (i = m; i >= n; i--) {
        if (i % 2 === 0) {
            // 짝수일 때만 minEven에 i 대입
            minEven = i;
        }
    }
    console.log(`${n}과 ${m} 사이의 가장 작은 짝수는 ${minEven}입니다.`);
    // n ~ m 까지의 홀수만 출력하세요.
    for (i = n; i <= m; i++) {
        if (i % 2 === 1) {
            // 홀수인 경우
            console.log("홀수", i);
            continue;
        }
        console.log("짝수", i);
    }
    // console.log(`${n}과 ${m} 사이의 가장 작은 짝수는 ${minEven}입니다.`);
})();
