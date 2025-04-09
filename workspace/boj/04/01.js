/*
!!! nums가 1개일 경우 배열이 아니라 숫자가 들어오기 때문에 주의해야 함

제목: 개수 세기
설명: 배열을 입력받고 v를 찾는 문제
제출: https://www.acmicpc.net/submit/10807

문제
총 N개의 정수가 주어졌을 때, 정수 v가 몇 개인지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 정수의 개수 N(1 ≤ N ≤ 100)이 주어진다. 
둘째 줄에는 정수가 공백으로 구분되어져있다. 
셋째 줄에는 찾으려고 하는 정수 v가 주어진다. 
입력으로 주어지는 정수와 v는 -100보다 크거나 같으며, 100보다 작거나 같다.

출력
첫째 줄에 입력으로 주어진 N개의 정수 중에 v가 몇 개인지 출력한다.

예제 입력 1
11
1 4 1 2 4 2 4 2 3 4 4
2
예제 출력 1
3

예제 입력 2
11
1 4 1 2 4 2 4 2 3 4 4
5
예제 출력 2
0

예제 입력 3
1
42
42
예제 출력 3
1
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성
  const n = data.a;
  const numbers = data.b;
  const v = data.c;

  result = 0;
  for (let i = 0; i < n; i++) {
    if (numbers[i] === v) {
      result++;
    }
  }
  console.log(result);
}
main();

/**
 * 표준 입력장치(console)에서 3 줄로 입력된 데이터를 읽어서 숫자로 변환한 후
 * 객제에 a, b, c 속성으로 저장하여 반환한다.
 * @returns {object} a, b, c 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim().split("\n");

  const result = new Object();

  result.a = isNaN(inputData[0]) ? inputData[0] : parseInt(inputData[0]);
  result.b = inputData[1].split(" ").map(Number);
  result.c = isNaN(inputData[2]) ? inputData[0] : parseInt(inputData[2]);

  return result;
}
