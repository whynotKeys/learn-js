/*
제목: 나머지
설명: 배열을 활용하여 서로 다른 값의 개수를 찾는 문제
제출: https://www.acmicpc.net/submit/3052

문제
두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 
예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. 
수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 
그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.

입력
첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 
이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.

출력
첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.

예제 입력 1 
1
2
3
4
5
6
7
8
9
10
예제 출력 1 - 모든 수를 42로 나눈 나머지는 1, 2, 3, 4, 5, 6, 7, 8, 9, 10이다.
10

예제 입력 2 
42
84
252
420
840
126
42
84
420
126
예제 출력 2 (모든 수를 42로 나눈 나머지는 0이다.)
1

예제 입력 3 
39
40
41
42
43
44
82
83
84
85
예제 출력 3 
6
*/

function main() {
  const data = getData();
  const number = 42;
  let rests = [];
  for (let elem of data) {
    // 입력한 값을 지정한 숫자로 나눠서 나머지를 rests 배열에 저장
    let rest = elem % number;
    rests.push(rest);
  }

  const uniqueRest = [...new Set(rests)]; // rests 배열에서 중복값 제거

  console.log(uniqueRest.length); // 배열의 길이 = 서로 다른 값의 개수 출력
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
