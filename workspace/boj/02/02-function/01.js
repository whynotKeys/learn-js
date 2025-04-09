/*
제목: 두 수 비교하기
설명: 두 수를 비교한 결과를 출력하는 문제
제출: https://www.acmicpc.net/submit/1330

문제
두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

입력
첫째 줄에 A와 B가 주어진다. A와 B는 공백 한 칸으로 구분되어져 있다.

출력
첫째 줄에 다음 세 가지 중 하나를 출력한다.

A가 B보다 큰 경우에는 '>'를 출력한다.
A가 B보다 작은 경우에는 '<'를 출력한다.
A와 B가 같은 경우에는 '=='를 출력한다.

제한
-10,000 ≤ A, B ≤ 10,000

예제 입력 1
1 2
예제 출력 1
<

예제 입력 2
10 2
예제 출력 2
>

예제 입력 3
5 5
예제 출력 3
==
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성
  const A = data.a;
  const B = data.b;

  if (A > B) {
    console.log(">");
  } else if (A < B) {
    console.log("<");
  } else {
    console.log("==");
  }
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
