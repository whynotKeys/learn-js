"use strict";
(() => {
    /*
    입력한 값이 홀수인지 짝수인지 출력하는 코드를 작성하세요.
    
    입력값 예시 1:
    15
    출력값 1:
    15는 홀수입니다.
    
    입력값 예시 2:
    12
    출력값 2:
    12는 짝수입니다.
    */
    // const fs = require("fs");
    // const inputData = fs.readFileSync(0).toString().trim();
    const fs = require("fs"); // file system에서 데이터를 입/출력 할 때 사용
    const fileBuffer = fs.readFileSync(0); // 원래 ()안에 파일명을 쓰게 되어있으나 0을 넣으면 '표준입력장치=console'로 설정됨
    console.log(fileBuffer);
    const data = fileBuffer.toString();
    console.log(data);
    let num = Number(data);
    let result = num % 2 === 0 ? "짝수" : "홀수";
    console.log(`${num}은 ${result}입니다.`);
})();
