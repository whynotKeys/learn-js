/*
제목: A×B
설명: 곱셈 문제
제출: https://www.acmicpc.net/submit/10998

문제
두 정수 A와 B를 입력받은 다음, A×B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A×B를 출력한다.

예제 입력 1
1 2
예제 출력 1

2
예제 입력 2
3 4
예제 출력 2
12
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split(" ");

const a = parseInt(inputData[0]); // 정수형으로 변경
const b = parseInt(inputData[1]); // 정수형으로 변경

console.log(a * b);
