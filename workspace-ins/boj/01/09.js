/*
제목: 나머지
설명: 네 개의 계산식을 계산하는 문제. 이 문제를 푼 다음에는 직접 입력을 만들어서 넣어 봅시다. 어떤 사실을 관찰할 수 있나요?
제출: https://www.acmicpc.net/submit/10430

문제
(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 A, B, C가 순서대로 주어진다. (2 ≤ A, B, C ≤ 10000)

출력
첫째 줄에 (A+B)%C, 둘째 줄에 ((A%C) + (B%C))%C, 셋째 줄에 (A×B)%C, 넷째 줄에 ((A%C) × (B%C))%C를 출력한다.

예제 입력 1
5 8 4

예제 출력 1
1
1
0
0
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const A = data.a;
  const B = data.b;
  const C = data.c;

  console.log((A+B)%C);
  console.log(((A%C) + (B%C))%C);
  console.log((A*B)%C);
  console.log(((A%C) * (B%C))%C);
}
main();

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 세 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b, c 속성으로 저장하여 반환한다.
 * @returns {object} a, b, c 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = parseInt(fileData[0]);
  result.b = parseInt(fileData[1]);
  result.c = parseInt(fileData[2]);

  return result;
}