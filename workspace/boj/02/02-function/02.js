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

function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성

  const result = data;
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
}

main();

/**
 * 표준 입력장치 (콘솔)에서 입력된 데이터를 읽어서 숫자로 변환한 후 반환한다.
 * @returns {string|number} 읽은 데이터(숫자일 경우 number로 형변환))
 */
function getData() {
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim();
  const result = isNaN(inputData) ? inputData : Number(inputData); // 입력값이 숫자가 아닌 경우 그대로 반환
  // 숫자인 경우 parseInt로 변환하여 반환

  return result;
}
