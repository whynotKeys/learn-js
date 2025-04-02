/*
제목: 꼬마 정민
설명: 더 큰 수를 더하는 문제
제출: https://www.acmicpc.net/submit/11382

문제
꼬마 정민이는 이제 A + B 정도는 쉽게 계산할 수 있다. 이제 A + B + C를 계산할 차례이다!

입력
첫 번째 줄에 A, B, C (1 ≤ A, B, C ≤ 1012)이 공백을 사이에 두고 주어진다.

출력
A+B+C의 값을 출력한다.

예제 입력 1
77 77 7777

예제 출력 1
7931
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

const A = parseInt(inputData[0]);
const B = parseInt(inputData[1]);
const C = parseInt(inputData[2]);

console.log(A + B + C);
