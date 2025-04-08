/*
제목: 사칙연산
설명: 모든 연산 문제
제출: https://www.acmicpc.net/submit/10869

문제
두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

입력
두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)

출력
첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.

예제 입력 1
7 3

예제 출력 1
10
4
21
2
1
*/

function main() {
  const data = getData();
  console.log(data.a + data.b);
  console.log(data.a - data.b);
  console.log(data.a * data.b);
  console.log(parseInt(data.a / data.b));
  console.log(data.a % data.b);
}
main();

// 입력값 예시 :
// 10 20

/**
 * 표준 입력장치(console)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객제에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();
  result.a = parseInt(inputData[0]);
  result.b = parseInt(inputData[1]);

  return result;
}
