/*
제목: A+B - 4
설명: 입력이 끝날 때까지 A+B를 출력하는 문제. EOF에 대해 알아 보세요.
제출: https://www.acmicpc.net/submit/10951

문제
두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

입력
입력은 여러 개의 테스트 케이스로 이루어져 있다.
각 테스트 케이스는 한 줄로 이루어져 있으며, 각 줄에 A와 B가 주어진다. (0 < A, B < 10)

출력
각 테스트 케이스마다 A+B를 출력한다.

예제 입력 1
1 1
2 3
3 4
9 8
5 2

예제 출력 1
2
5
7
17
7
*/

const fs = require("fs");
const inputData = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
for (; ; i++) {
  const num1 = inputData[i];
  const num2 = inputData[i];

  if (num1 === undefined || num2 === undefined) {
    break;
  }

  const a = Number(inputData[i].split(" ")[0]);
  const b = Number(inputData[i].split(" ")[1]);

  console.log(a + b);
}
