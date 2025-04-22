/*
제목: 문자와 문자열
설명: 문자열을 입력받고 문자열의 특정 위치를 읽어 봅시다.
제출: https://www.acmicpc.net/submit/27866

문제
단어 S와 정수 i가 주어졌을 때, S의 i번째 글자를 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 영어 소문자와 대문자로만 이루어진 단어 S가 주어진다. 단어의 길이는 최대 1,000이다.
둘째 줄에 정수 i가 주어진다. (1 ≤ i ≤ |S|)

출력
S의 i번째 글자를 출력한다.

예제 입력 1
Sprout
3
예제 출력 1
r

예제 입력 2
shiftpsh
6
예제 출력 2
p

예제 입력 3
Baekjoon
4
예제 출력 3
k
*/

function main() {
  const data = getData();

  const word = data[0];
  const order = data[1];

  console.log(word[order - 1]);
}

main();

/**
 * 표준 입력장치(console)에서 여러 줄로 입력된 데이터를 읽어서 숫자로 변환한 후 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n"); // 입력값을 가져오고 줄바꿈 기준으로 나누어 저장

  const result = []; // return 할 2차원 배열

  for (let row of arr) {
    // for...of 문에 넣어서 값 꺼내어 2차원 배열에 저장
    let rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]); // 요소가 숫자인 경우만 정수형으로 변환하고, 문자인 경우는 원래 값 그대로 둠
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr); // 입력값이 1개인 경우 값으로 바로 나오도록 함
  }

  return result.length === 1 ? result[0] : result; // 입력값이 1개인 경우 1차배열로 나오도록 함
}
