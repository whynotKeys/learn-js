/*
제목: 단어의 개수
설명: 단어의 개수를 구하는 문제
제출: https://www.acmicpc.net/submit/1152

문제
영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열에는 몇 개의 단어가 있을까? 이를 구하는 프로그램을 작성하시오. 
단, 한 단어가 여러 번 등장하면 등장한 횟수만큼 모두 세어야 한다.

입력
첫 줄에 영어 대소문자와 공백으로 이루어진 문자열이 주어진다. 
이 문자열의 길이는 1,000,000을 넘지 않는다. 
단어는 공백 한 개로 구분되며, 공백이 연속해서 나오는 경우는 없다. 
또한 문자열은 공백으로 시작하거나 끝날 수 있다.

출력
첫째 줄에 단어의 개수를 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1
The Curious Case of Benjamin Button
예제 출력 1
6

예제 입력 2
 The first character is a blank
예제 출력 2
6

예제 입력 3
The last character is a blank 
예제 출력 3
6

예제 입력 4
a
예제 출력 4
1

예제 입력 5
 a 
예제 출력 5
1

예제 입력 6
Hello World
예제 출력 6
2

예제 입력 7
 
예제 출력 7
0

예제 입력 8
Programming is fun
예제 출력 8
3

예제 입력 9
One Two Three Four Five Six Seven Eight Nine Ten
예제 출력 9
10

예제 입력 10
a b c d e
예제 출력 10
5

예제 입력 11
ThisIsASingleWord
예제 출력 11
1

예제 입력 12
 Start and end with spaces 
예제 출력 12
5

예제 입력 13
A
예제 출력 13
1
*/

function main() {
  const data = getData();

  if (typeof data === "string") {
    const word = data.trim();
    console.log(word === "" ? 0 : 1);
  } else if (typeof data === "string" && data.trim() === "") {
    console.log(0);
  } else {
    console.log(data.length);
  }
}

main();

/**
 * 표준 입력장치(console)에서 여러 줄로 입력된 데이터를 읽어서 숫자로 변환한 후 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const arr = require("fs").readFileSync(0).toString().split("\n"); // 입력값을 가져오고 줄바꿈 기준으로 나누어 저장

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
