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

function main() {
  const data = getData();
  console.log(data.a * data.b);
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
