/*
제목: 문자열 반복
설명: 각 문자를 반복하여 출력하는 문제
제출: https://www.acmicpc.net/submit/2675

문제
문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
S에는 QR Code "alphanumeric" 문자만 들어있다.
QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.

입력
첫째 줄에 테스트 케이스의 개수 T(1 ≤ T ≤ 1,000)가 주어진다. 
각 테스트 케이스는 반복 횟수 R(1 ≤ R ≤ 8), 문자열 S가 공백으로 구분되어 주어진다. 
S의 길이는 적어도 1이며, 20글자를 넘지 않는다. 

출력
각 테스트 케이스에 대해 P를 출력한다.

예제 입력 1
2
3 ABC
5 /HTP

예제 출력 1
AAABBBCCC
/////HHHHHTTTTTPPPPP
*/

function main() {
  const data = getData();
  const t = data[0]; // 테스트 케이스의 개수

  for (let i = 1; i <= t; i++) {
    let result = ""; // 결과값을 넣을 변수 정의

    let count = data[i][0]; // 반복해야 하는 수
    let string = data[i][1]; // 문자열
    for (let k = 0; k < string.length; k++) {
      result += string[k].repeat(count); // 주어진 숫자만큼 반복한 문자를 결과 변수에 추가
    }
    console.log(result); // 결과값 출력
  }
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
