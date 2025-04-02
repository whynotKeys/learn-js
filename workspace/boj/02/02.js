/*
제목: 시험 성적
설명: 시험 점수를 성적으로 바꾸는 문제
제출: https://www.acmicpc.net/submit/9498

문제
시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 점수가 주어진다. 시험 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.

출력
시험 성적을 출력한다.

예제 입력 1
100

예제 출력 1
A
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim();

const result = parseInt(inputData);
let grade;

if (result <= 59) {
  grade = "F";
} else if (result <= 69) {
  grade = "D";
} else if (result <= 79) {
  grade = "C";
} else if (result <= 89) {
  grade = "B";
} else {
  grade = "A";
}

console.log(grade);
