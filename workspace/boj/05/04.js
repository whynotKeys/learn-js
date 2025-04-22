/*
제목: 아스키 코드
설명: 데이터는 결국 0과 1일 텐데 문자를 어떻게 만드는 걸까요? 아스키 코드에 대해 알아봅시다.
제출: https://www.acmicpc.net/submit/11654

문제
알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

입력
알파벳 소문자, 대문자, 숫자 0-9 중 하나가 첫째 줄에 주어진다.

출력
입력으로 주어진 글자의 아스키 코드 값을 출력한다.

예제 입력 1
A
예제 출력 1
65

예제 입력 2
C
예제 출력 2
67

예제 입력 3
0
예제 출력 3
48

예제 입력 4
9
예제 출력 4
57

예제 입력 5
a
예제 출력 5
97

예제 입력 6
z
예제 출력 6
122
*/
// 문자열만 들어오는 문제라서 getData() 숫자로 변환하는 부분을 삭제하고 사용함
function main() {
  const data = getData();
  console.log(data.charCodeAt());
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
