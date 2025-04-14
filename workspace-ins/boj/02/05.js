/*
제목: 알람 시계
설명: 시간 계산 문제
제출: https://www.acmicpc.net/submit/2884

문제
상근이는 매일 아침 알람을 듣고 일어난다. 
알람을 듣고 바로 일어나면 다행이겠지만, 항상 조금만 더 자려는 마음 때문에 매일 학교를 지각하고 있다.
상근이는 모든 방법을 동원해보았지만, 조금만 더 자려는 마음은 그 어떤 것도 없앨 수가 없었다.
이런 상근이를 불쌍하게 보던 창영이는 자신이 사용하는 방법을 추천해 주었다.

바로 "65분 일찍 알람 설정하기"이다.
이 방법은 단순하다. 원래 설정되어 있는 알람을 45분 앞서는 시간으로 바꾸는 것이다. 
어차피 알람 소리를 들으면, 알람을 끄고 조금 더 잘 것이기 때문이다. 
이 방법을 사용하면, 매일 아침 더 잤다는 기분을 느낄 수 있고, 학교도 지각하지 않게 된다.

현재 상근이가 설정한 알람 시각이 주어졌을 때, 창영이의 방법을 사용한다면, 이를 언제로 고쳐야 하는지 구하는 프로그램을 작성하시오.

입력
첫째 줄에 두 정수 H와 M이 주어진다. (0 ≤ H ≤ 23, 0 ≤ M ≤ 59) 그리고 이것은 현재 상근이가 설정한 알람 시간 H시 M분을 의미한다.

입력 시간은 24시간 표현을 사용한다. 24시간 표현에서 하루의 시작은 0:0(자정)이고, 끝은 23:59(다음날 자정 1분 전)이다. 
시간을 나타낼 때, 불필요한 0은 사용하지 않는다.

출력
첫째 줄에 상근이가 창영이의 방법을 사용할 때, 설정해야 하는 알람 시간을 출력한다. (입력과 같은 형태로 출력하면 된다.)

예제 입력 1
10 10
예제 출력 1
9 25

예제 입력 2
0 30
예제 출력 2
23 45

예제 입력 3
23 40
예제 출력 3
22 55

예제 입력 4
12 47
예제 출력 4
12 2
*/

function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성

  /*
  let h = data.a; // 0
  let m = data.b; // 30

  if (m < 45) {
    h--; // -1
    if (h < 0) h += 24; // 23
    m += 60; // 90
  }

  m -= 45;

  console.log(h + ' ' + m);

  */

  // 이도울
  /*
  let h = data.a * 60;
  let m = data.b;

  if (h === 0 && m < 45) { // 0 45 ~ 0 59 문제 발생
    h = 24 * 60;
  }

  const resultH = Math.floor((h + m - 45) / 60);
  const resultM = (h + m - 45) % 60;

  console.log(resultH, resultM);
  */

  // 박상희
  /*
  let h = data.a; // 0
  let m = data.b; // 30

  m -= 45;
  if(m < 0){
    m += 60;
    h -= 1;

    if(h < 0){
      h = 23;
    }
  }

  console.log(h + ' ' + m);
  */


  // 구성연
  /*
  let H = data.a;
  let M = data.b;

  let hPlus = H * 60;
  let mPlus = hPlus + M;

  let delM = mPlus - 45;

  let hspilt = Math.floor(delM / 60);
  let mspilt = delM % 60;

  if (hspilt < 0) {
    hspilt += 24;
  }

  console.log(hspilt, mspilt);
  */

  // 황수곤
  // 1번
  /*
  let hour = data.a;
  let min = data.b;

  if (min < 45) {
    // 2번
    if (hour > 0) {
      console.log(`${hour - 1} ${min + 15}`); // 1번 조건이 참이면 2번 조건 확인(참이면 수행문 수행) hour - 1, min + 15 하는 이유 -> 시간 계산을 할 때 입력받은 min이 45보다 작으면 시간에서 60을 빌려온다는 개념을 구현하기 위해 hour -1, 예제 시간에서 +15하면 출력 시간의 분이 되므로 min + 15
    } else {
      console.log(`23 ${min + 15}`); // 입력받은 hour가 0인 경우
    }
  } else {
    console.log(`${hour} ${min - 45}`);
  }
  */

  // 조한솔
  /*
  let h = data.a;
  let m = data.b;

  if (m >= 45) {
    m -= 45;
  } else {
    m += 15;
    if (h === 0) {
      h += 23;
    }
    else {
      h -= 1;
    }
  }

  console.log(h, m);
  */

  // 이훈진
  let h = data.a;
  let m = data.b;

  // 전체 분으로 환산
  let totalMin = h * 60 + m - 45;

  // 음수면 하루 더하기
  if (totalMin < 0) totalMin += 60 * 24;

  // 시:분으로 변환
  h = Math.floor(totalMin / 60);
  m = totalMin % 60;

  console.log(h + " " + m);
}
main();

/**
 * 표준 입력장치(콘솔)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);

  return result;
}