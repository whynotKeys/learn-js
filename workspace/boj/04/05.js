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
*/

// 바구니 N개
// 공 1~N번 무한대 개

// 던지기 시도 M번
// 같은 번호 바구니에 넣고 이미 공 있으면 빼고 넣음.

//   N: 출력돼야하는 숫자 수
//   M: 밑에 입력될 줄 수
//   i j k : i~j번 바구니에 k번 공 넣음

function main() {
  const data = getData();

  const basketCount = data[0][0]; // N
  const tryCount = data[0][1]; // M

  let basket = new Array(basketCount).fill(0); // 바구니 생성해서 모두 0 넣어줌

  for (i = 1; i <= tryCount; i++) { // 한 번의 시도로 매칭되는 바구니와 공 번호 추출
    let min = data[i][0];
    let max = data[i][1];
    let k = data[i][2];

    for (num = min; num <= max; num++) {// 공 번호를 순서에 맞춰 basket 배열에 입력
      basket[num-1] = k;
    }
  }

// 만들어진 바구니의 번호 배열을 형식에 맞춰 문자열에 입력
  let result = '';
  for(let elem of basket){
    result += elem+' ';
  }

  console.log(result);
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

