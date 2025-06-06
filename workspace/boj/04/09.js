/*
제목: 바구니 뒤집기
설명: 배열을 뒤집는 문제
제출: https://www.acmicpc.net/submit/10811

문제
도현이는 바구니를 총 N개 가지고 있고, 각각의 바구니에는 1번부터 N번까지 번호가 순서대로 적혀져 있다. 
바구니는 일렬로 놓여져 있고, 가장 왼쪽 바구니를 1번째 바구니, 그 다음 바구니를 2번째 바구니, ..., 가장 오른쪽 바구니를 N번째 바구니라고 부른다. 
도현이는 앞으로 M번 바구니의 순서를 역순으로 만들려고 한다. 
도현이는 한 번 순서를 역순으로 바꿀 때, 순서를 역순으로 만들 범위를 정하고, 그 범위에 들어있는 바구니의 순서를 역순으로 만든다.

바구니의 순서를 어떻게 바꿀지 주어졌을 때, 
M번 바구니의 순서를 역순으로 만든 다음, 바구니에 적혀있는 번호를 가장 왼쪽 바구니부터 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 N (1 ≤ N ≤ 100)과 M (1 ≤ M ≤ 100)이 주어진다.
둘째 줄부터 M개의 줄에는 바구니의 순서를 역순으로 만드는 방법이 주어진다. 
방법은 i j로 나타내고, 왼쪽으로부터 i번째 바구니부터 j번째 바구니의 순서를 역순으로 만든다는 뜻이다. (1 ≤ i ≤ j ≤ N)
도현이는 입력으로 주어진 순서대로 바구니의 순서를 바꾼다.

출력
모든 순서를 바꾼 다음에, 가장 왼쪽에 있는 바구니부터 바구니에 적혀있는 순서를 공백으로 구분해 출력한다.

[AI가 추가한 테스트 케이스 10개]
예제 입력 1 
5 4
1 2
3 4
1 4
2 2

예제 출력 1 
3 4 1 2 5

예제 입력 2 
3 2
1 2
2 3

예제 출력 2 
2 3 1

예제 입력 3
10 5
1 5
3 8
6 10
1 10
2 5

예제 출력 3
1 10 9 3 2 6 7 8 4 5

예제 입력 4
7 3
1 7
2 4
5 7

예제 출력 4
7 4 5 6 1 2 3

예제 입력 5
6 4
1 3
4 6
1 6
2 5

예제 출력 5
4 2 1 6 5 3

예제 입력 6
8 2
1 4
5 8

예제 출력 6
4 3 2 1 8 7 6 5

예제 입력 7
9 3
1 9
3 7
2 8

예제 출력 7
9 2 7 6 5 4 3 8 1

예제 입력 8
4 2
1 2
3 4

예제 출력 8
2 1 4 3

예제 입력 9
5 1
2 4

예제 출력 9
1 4 3 2 5

예제 입력 10
3 3
1 3
1 3
1 3

예제 출력 10
3 2 1

예제 입력 11
6 2
1 3
4 6

예제 출력 11
3 2 1 6 5 4

예제 입력 12
10 4
1 10
1 5
6 10
3 8

예제 출력 12
6 7 3 2 1 10 9 8 4 5
*/

// 바구니 문제 고만 갖고와

// N개의 바구니가 왼쪽부터 오른쪽까지 1~N번 : 출력되야하는 값의 수
// 역순 바꾸기 M번 시도 -> 일정 범위만큼 역순으로 재배치
// i~j번의 순서 역순 재배치 : 2~막줄

function main() {
  const data = getData();

  const basketCount = data[0][0];
  const changeTry = data[0][1];

  // 초기 세팅 : 바구니에 번호 넣어주기
  const baskets = new Array(basketCount);
  for (let i = 0; i < baskets.length; i++) {
    baskets[i] = i + 1;
  }

  // 바꾸기 시도 정의
  for (let i = 1; i <= changeTry; i++) {
    let minIndex = data[i][0] - 1;
    let maxIndex = data[i][1] - 1;

    for (let k = 0; k < Math.floor(maxIndex - minIndex + 1) / 2; k++) {
      // 인덱스끼리 뺀 값의 반만큼 실행
      let temp = baskets[minIndex + k]; // 교환을 위한 임시값 저장
      baskets[minIndex + k] = baskets[maxIndex - k]; // i바구니 자리에 j바구니 놓기
      baskets[maxIndex - k] = temp; // j바구니 자리에 i바구니를 놓기
    }
  }

  result = baskets.join(" ");
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
