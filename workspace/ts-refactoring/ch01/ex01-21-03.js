"use strict";
(() => {
    /*
    for문을 이용해서 구구단 작성
    */
    /*
    한 단만 출력
    */
    // const dan = 3;
    // for (let i = 1; i <= 9; i++) {
    //   // console.log(dan + " x " + i + " = " + dan * i);
    //   console.log(`${dan} x ${i} = ${dan * i}`); // 템플릿 리터럴 사용
    // }
    /*
    2단부터 9단까지 출력
    출력 예시
    2*1 = 2
    2*2 =4
    ....
    9*8=72
    9*9=81
    */
    // for (let i = 2; i <= 9; i++) {
    //   console.log(`구구단을 외자! 구구단을 외자! ${i}단 시작!`);
    //   for (let k = 1; k <= 9; k++) {
    //     console.log(`${i} x ${k} = ${i * k}`); // 템플릿 리터럴 사용
    //   }
    // }
    /*
    2단부터 9단까지 출력
    출력 예시
    2 x 1 = 2  3 x 1 = 3  4 x 1 = 4...
    2 x 2 = 4  3 x 2 = 6 ...
    ...
    2 x 9 = 18  3 x 9 = 27 ... 9 x 9 = 81
    */
    for (let i = 1; i <= 9; i++) {
        line = "";
        for (let k = 2; k <= 9; k++) {
            line += `${k} x ${i} = ${i * k}  `;
            if (i * k < 10) {
                line += " ";
            }
            // console.log(`${i} x ${k} = ${i * k}`); // 템플릿 리터럴 사용
        }
        console.log(line);
    }
})();
