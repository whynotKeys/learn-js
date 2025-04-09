/*
제목: 윤년
설명: 윤년을 판별하는 문제
제출: https://www.acmicpc.net/submit/2753

문제
연도가 주어졌을 때, 윤년이면 1, 아니면 0을 출력하는 프로그램을 작성하시오.

윤년은 연도가 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때이다.

예를 들어, 2012년은 4의 배수이면서 100의 배수가 아니라서 윤년이다. 1900년은 100의 배수이고 400의 배수는 아니기 때문에 윤년이 아니다. 하지만, 2000년은 400의 배수이기 때문에 윤년이다.

입력
첫째 줄에 연도가 주어진다. 연도는 1보다 크거나 같고, 4000보다 작거나 같은 자연수이다.

출력
첫째 줄에 윤년이면 1, 아니면 0을 출력한다.

예제 입력 1
2000
예제 출력 1
1

예제 입력 2
1999
예제 출력 2
0
*/

function main() {
  const year = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성

  if ((year % 4 === 0 && year % 100 != 0) | (year % 400 === 0)) {
    console.log(1);
  } else {
    console.log(0);
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
