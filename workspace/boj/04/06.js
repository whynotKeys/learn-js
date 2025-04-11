/*
제목: 공 바꾸기
설명: 배열의 값을 교환하는 문제
제출: https://www.acmicpc.net/submit/10813

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 매겨져 있다. 
바구니에는 공이 1개씩 들어있고, 처음에는 바구니에 적혀있는 번호와 같은 번호가 적힌 공이 들어있다.
도현이는 앞으로 M번 공을 바꾸려고 한다. 
도현이는 공을 바꿀 바구니 2개를 선택하고, 두 바구니에 들어있는 공을 서로 교환한다.
공을 어떻게 바꿀지가 주어졌을 때, M번 공을 바꾼 이후에 각 바구니에 어떤 공이 들어있는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에 걸쳐서 공을 교환할 방법이 주어진다. 
각 방법은 두 정수 i j로 이루어져 있으며, i번 바구니와 j번 바구니에 들어있는 공을 교환한다는 뜻이다. (1 ≤ i ≤ j ≤ N)
도현이는 입력으로 주어진 순서대로 공을 교환한다.

출력
1번 바구니부터 N번 바구니에 들어있는 공의 번호를 공백으로 구분해 출력한다.

예제 입력 1 
5 4
1 2
3 4
1 4
2 2

예제 출력 1 
3 1 4 2 5
*/

// 바구니 N개
// N개의 공이 동일한 번호의 바구니 안에

// 바꾸기 M번
// 바구니 2개를 골라 서로 공 교환

//   N: 출력돼야하는 숫자 수
//   M: 밑에 입력될 줄 수
//   i j : i번 - j번 바구니끼리 공 교환

function main() {
  const data = getData();

  const basketCount = data[0][0]; // N
  const changeCount = data[0][1]; // M

  let basket = []; // 바구니 생성해서 맞는 번호의 공을 넣어줌
  for (i = 1; i <= basketCount; i++) {
    basket[i] = i;
  }

  for (i = 1; i <= changeCount; i++) {
    // 공 교환 : M번 실행
    let changeNo1 = data[i][0];
    let changeNo2 = data[i][1];

    let temp = basket[changeNo1]; // 값 교환을 위해 일시 저장하는 변수
    basket[changeNo1] = basket[changeNo2];
    basket[changeNo2] = temp;
  }

  // 만들어진 바구니의 번호 배열을 형식에 맞춰 문자열에 입력
  let result = "";
  for (let i = 1; i < basket.length; i++) {
    result += basket[i] + " ";
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
