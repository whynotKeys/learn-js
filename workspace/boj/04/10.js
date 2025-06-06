/*
제목: 평균
설명: 평균을 조작하는 문제
제출: https://www.acmicpc.net/submit/1546

문제
세준이는 기말고사를 망쳤다. 
세준이는 점수를 조작해서 집에 가져가기로 했다. 
일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 
그리고 나서 모든 점수를 점수/M*100으로 고쳤다.

예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.

세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.

입력
첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 
둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.

출력
첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10⁻²(0.01) 이하이면 정답이다.

예제 입력 1
3
40 80 60
예제 출력 1
75.0

예제 입력 2 - 10⁻² 이하의 오차를 허용한다는 말은 정확히 소수 2번째 자리까지 출력하라는 뜻이 아니다.
3
10 20 30
예제 출력 2
66.666667

예제 입력 3
4
1 100 100 100
예제 출력 3
75.25

예제 입력 4
5
1 2 4 8 16
예제 출력 4
38.75

예제 입력 5
2
3 10
예제 출력 5
65.0

예제 입력 6
4
10 20 0 100
예제 출력 6
32.5

예제 입력 7
1
50
예제 출력 7
100.0

예제 입력 8
9
10 20 30 40 50 60 70 80 90
예제 출력 8
55.55555555555556
*/

// 세준아 근데 최고점 말고 그냥 다른 일정 값을 곱하는 게 낫지 않니? 최고점이 30이면 어떡해

function main() {
  const data = getData();

  const subjectCount = data[0][0]; // 과목 수
  const subjectScores = data[1]; // 시험 점수 배열
  const bestScore = Math.max(...subjectScores); // 시험 점수 중 최고점

  const fakeScores = new Array(subjectCount); // 조작점수를 넣을 배열 생성
  let sum = 0;
  for (let i = 0; i < subjectCount; i++) {
    fakeScores[i] = (subjectScores[i] / bestScore) * 100;
    sum += fakeScores[i];
  }
  // 문제에서 요구하는대로 형식 수정 (소수점 1~6자리까지 표기)
  let result = sum / subjectCount;

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
    result.push(rowArr); //얘는 걍 다 배열로 받게 함
  }

  return result.length === 1 ? result[0] : result; // 입력값이 1개인 경우 1차배열로 나오도록 함
}
