/*
제목: 공 넣기
설명: 배열에 값을 쓰는 문제
제출: https://www.acmicpc.net/submit/10810

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
또, 1번부터 N번까지 번호가 적혀있는 공을 매우 많이 가지고 있다. 
가장 처음 바구니에는 공이 들어있지 않으며, 바구니에는 공을 1개만 넣을 수 있다.

도현이는 앞으로 M번 공을 넣으려고 한다. 
도현이는 한 번 공을 넣을 때, 공을 넣을 바구니 범위를 정하고, 정한 바구니에 모두 같은 번호가 적혀있는 공을 넣는다. 
만약, 바구니에 공이 이미 있는 경우에는 들어있는 공을 빼고, 새로 공을 넣는다. 
공을 넣을 바구니는 연속되어 있어야 한다.

공을 어떻게 넣을지가 주어졌을 때, M번 공을 넣은 이후에 각 바구니에 어떤 공이 들어 있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에 걸쳐서 공을 넣는 방법이 주어진다. 
각 방법은 세 정수 i j k로 이루어져 있으며, i번 바구니부터 j번 바구니까지에 k번 번호가 적혀져 있는 공을 넣는다는 뜻이다. 
예를 들어, 2 5 6은 2번 바구니부터 5번 바구니까지에 6번 공을 넣는다는 뜻이다. (1 ≤ i ≤ j ≤ N, 1 ≤ k ≤ N)
도현이는 입력으로 주어진 순서대로 공을 넣는다.

출력
1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다. 
공이 들어있지 않은 바구니는 0을 출력한다.

예제 입력 1 
5 4
1 2 3
3 4 4
1 4 1
2 2 2
예제 출력 1 
1 2 1 1 0

예제 입력 2
4 3
1 2 2
2 3 4
2 2 1
예제 출력 2 

*/

function main() {
  const data = getData();
  // console.log(data); // [ [ 5, 4 ], [ 1, 2, 3 ], [ 3, 4, 4 ], [ 1, 4, 1 ], [ 2, 2, 2 ] ]

  // 첫 번째 줄에서 바구니의 개수(n)를 가져옴
  const n = data[0][0];
  
  // n개의 바구니를 0으로 초기화한 배열 생성
  const result = new Array(n).fill(0);

  // fill()을 몰랐다면...
  // const result = [];
  // for(let i=0; i<n; i++) {
  //   result.push(0);
  // }

  // 각 공 넣기 명령을 순회
  for(let i=1; i<data.length; i++) {
    const rowArr = data[i]; // i=1 [ 1, 2, 3 ], i=2 [ 3, 4, 4 ] ...
    const x = rowArr[0]; // 시작 바구니 번호
    const y = rowArr[1]; // 종료 바구니 번호
    const z = rowArr[2]; // 공 번호

    /*
    1회차: [ 1, 2, 3 ] => 3 3 0 0 0
    2회차: [ 3, 4, 4 ] => 3 3 4 4 0
    3회차: [ 1, 4, 1 ] => 1 1 1 1 0
    4회차: [ 2, 2, 2 ] => 1 2 1 1 0
    */
    for(let k = x; k <= y; k++) {
      // x번부터 y번 바구니까지 z번 공을 넣음
      // k-1을 하는 이유: 배열은 0부터 시작하지만 바구니는 1부터 시작하므로 인덱스 조정
      result[k-1] = z;
    }
  }

  // 결과 배열을 공백으로 구분된 문자열로 변환하여 출력
  // [1, 2, 1, 1, 0] => '1 2 1 1 0'
  const strResult = result.join(' ');

  // join()을 몰랐다면...
  // const strResult = '';
  // for(let i=0; i<result.length; i++){
  //   strResult += result[i] + ' ';
  // }
  console.log(strResult);

  // 문자열을 다시 배열로 변환 (참고용 코드)
  // '1 2 1 1 0' => [1, 2, 1, 1, 0]
  const reArray = strResult.split(' ');
  console.log(reArray);
}

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

main();