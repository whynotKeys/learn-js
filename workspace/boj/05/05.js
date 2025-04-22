/*
제목: 숫자의 합
설명: 정수를 문자열로 입력받는 문제. Python처럼 정수 크기에 제한이 없다면 상관 없으나, 예제 3은 일반적인 정수 자료형에 담기에 너무 크다는 점에 주목합시다.
제출: https://www.acmicpc.net/submit/11720

문제
N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 숫자의 개수 N (1 ≤ N ≤ 100)이 주어진다. 둘째 줄에 숫자 N개가 공백없이 주어진다.

출력
입력으로 주어진 숫자 N개의 합을 출력한다.

예제 입력 1
1
1
예제 출력 1
1

예제 입력 2
5
54321
예제 출력 2
15

예제 입력 3
25
7000000000000000000000000
예제 출력 3
7

예제 입력 4
11
10987654321
예제 출력 4
46
*/

// 문제에 한자리 숫자라고 쓰면 더 이해하기 좋지 않을까요
// 문자열만 들어오는 문제라서 getData() 숫자로 변환하는 부분을 삭제하고 사용함
function main() {
  const data = getData();
  const count = Number(data[0]);
  const numbers = data[1];

  let result = 0; // 결과값을 담을 변수

  for (let i = 0; i < count; i++) {
    result += Number(numbers[i]);
  }
  console.log(result);
}

main();

/**
 * 표준 입력장치(console)에서 여러 줄로 입력된 데이터를 읽어서 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n"); // 입력값을 가져오고 줄바꿈 기준으로 나누어 저장

  const result = []; // return 할 2차원 배열

  for (let row of arr) {
    // for...of 문에 넣어서 값 꺼내어 2차원 배열에 저장
    let rowArr = row.split(" ");
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr); // 입력값이 1개인 경우 값으로 바로 나오도록 함
  }

  return result.length === 1 ? result[0] : result; // 입력값이 1개인 경우 1차배열로 나오도록 함
}
