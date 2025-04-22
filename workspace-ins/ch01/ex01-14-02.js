/*
콘솔에서 입력한 값이 홀수인지 짝수인지 출력하는 코드를 작성하세요

입력값 예시 1:
15
출력값 1:
15는 홀수 입니다.

입력값 예시 2:
12
출력값 2:
12는 짝수 입니다.
*/

// 파일 시스템 모듈을 불러옵니다. 콘솔 입력을 처리하기 위해 사용됩니다.
const fs = require("fs"); // file system에서 데이터를 입/출력 할때 사용

// 표준 입력(콘솔 입력)을 동기적으로 읽어옵니다.
const fileBuffer = fs.readFileSync(0);
console.log(fileBuffer);

// 버퍼를 문자열로 변환합니다.
const data = fileBuffer.toString();
console.log(data);

// 문자열을 숫자로 변환합니다.
let num = Number(data);

// 삼항 연산자를 사용하여 짝수/홀수를 판별합니다.
// num % 2가 0이면 짝수, 아니면 홀수입니다.
let result = num % 2 === 0 ? '짝수' : '홀수';

// 결과를 출력합니다.
console.log(`${num}은 ${result}입니다.`);