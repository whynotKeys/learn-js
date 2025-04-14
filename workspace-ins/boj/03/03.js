/*
제목: 합
설명: 1부터 N까지의 합을 구하는 문제. 물론 반복문 없이 풀 수도 있습니다.
제출: https://www.acmicpc.net/submit/8393

문제
n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 n (1 ≤ n ≤ 10,000)이 주어진다.

출력
1부터 n까지 합을 출력한다.

예제 입력 1
3

예제 출력 1
6
*/

function main() {
  const data = getData();
  // console.log(data);
  const n = data[0][0];
  let sum = 0;
  for (let i=1; i<=n; i++) {
    sum += i;
  }

  console.log(sum);
}
main();

function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString();
  const arr = fileData.trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k=0; k<rowArr.length; k++) rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr);
  }
  return result;
}
