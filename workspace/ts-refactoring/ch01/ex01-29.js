"use strict";
(() => {
    /*
    2차원 배열
    */
    const numbers = [
        [2, 4, 6, 8],
        [3, 6, 9, 12, 16],
        [4, 8, 12, 16],
        [5, 10, 15, 20],
    ]; // 2차원 배열 생성
    console.log(numbers);
    console.log(numbers[0]); // [ 2, 4, 6, 8 ]
    console.log(numbers[1]); // [ 3, 6, 9, 12, 16 ]
    console.log(numbers[2]); // [ 4, 8, 12, 16 ]
    console.log(numbers[3]); // [ 5, 10, 15, 20 ]
    console.log(numbers[0][2]); // 6
    console.log(numbers[3][2]); // 15
    // for문 사용해서 총합 구하기
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i]; // 행
        for (let k = 0; k < numbers[i].length; k++) {
            console.log(numbers[i][k]);
            sum += numbers[i][k];
        }
    }
    console.log("총합:", sum);
    // index 사용X : for...of 사용
    let total = 0;
    for (const row of numbers) {
        for (const num of row) {
            total += num;
        }
    }
    console.log("총합:", total);
})();
