/*
제목: A+B
설명: 두 수를 입력받고 합을 출력하는 문제
제출: https://www.acmicpc.net/submit/1000

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
첫째 줄에 A+B를 출력한다.

예제 입력 1
1 2

예제 출력 1
3
*/

const fs = require("fs");
// const fileData = fs.readFileSync('./02-ex-data.txt').toString().trim().split(' '); // 파일에서 값 불러서 쓸 경우
// const inputData = fs.readFileSync('.dev/stdin').toString().trim().split(' '); // 리눅스에서 쓰는 표준입력
const inputData = fs.readFileSync(0).toString().trim().split(" "); // 리눅스/윈도우에서 모두 쓸 수 있는 표준입력
// console.log(inputData); // 입력값 확인

const a = parseInt(inputData[0]); // 정수형으로 변경
const b = parseInt(inputData[1]); // 정수형으로 변경

console.log(a + b);
