/*
제목: 별 찍기 - 1
설명: 별을 찍는 문제 1
제출: https://www.acmicpc.net/submit/2438

문제
첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

입력
첫째 줄에 N(1 ≤ N ≤ 100)이 주어진다.

출력
첫째 줄부터 N번째 줄까지 차례대로 별을 출력한다.

예제 입력 1
5

예제 출력 1
*
**
***
****
*****
*/

function main() {
  const data = getData();
  // console.log(data);
  // for (let i=1; i<=data; i++) {
  //   let stars = '*'.repeat(i);
  //   // let stars = '';
  //   // for (let k=1; k<=i; k++) {
  //   //   stars += '*';
  //   // }
  //   console.log(stars);
  // }

  // 박선영
  let result = '';
  for (let i = 0; i < data; i++) {
    result += '*';
    console.log(result);
  }

  // 박상희
  let result2 = '';
  for(let i=0; i<data; i++){
    console.log(result2 += '*');
  }


}
main();

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k=0; k<rowArr.length; k++) rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length===1 ? result[0] : result;
}