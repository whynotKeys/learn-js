/*
제목: 곱셈
설명: 빈 칸에 들어갈 수는?
제출: https://www.acmicpc.net/submit/2588

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

     472 ... (1)
   x 385 ... (2)
  -------
    2360 ... (3)  <- 472 × 5
   3776  ... (4)  <- 472 × 80
  1416   ... (5)  <- 472 × 300
 -------
  181720 ... (6)  <- 최종 결과

(1)과 (2)위치에 들어갈 세 자리 자연수가 주어질 때 (3), (4), (5), (6)위치에 들어갈 값을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 
둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

예제 입력 1
472
385

예제 출력 1
2360
3776
1416
181720
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  // const n1 = data.a; // 472
  // const n2 = data.b; // 385

  // const n3 = n1 * (n2 % 10); // 472 * 5
  // const n4 = n1 * (parseInt(n2/10) % 10); // 472 * (38 % 10) = 472 * 8
  // const n5 = n1 * parseInt(n2/100); // 472 * 3

  // const n5 = n1 * parseInt(n2/100); // 472 * 3
  // const n4 = n1 * parseInt((n2-n5*100)/10); // 472 * (385-300)/10 = 472 * 8
  // const n3 = n1 * (n2 % 10); // 472 * 5

  const n1 = data.a; // 472
  const n2 = String(data.b); // '385'

  // TODO toString() 단원
  // 박상희.toString() => '박상희는 천재다.'
  // String(박상희) !=> '박상희는 천재다.'

  const n3 = n1 * n2[0];
  const n4 = n1 * n2[1];
  const n5 = n1 * n2[2];

  const n6 = n3 + n4*10 + n5*100;

  console.log(n3);
  console.log(n4);
  console.log(n5);
  console.log(n6);
}
main();

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 한 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split("\n");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);
  return result;
}