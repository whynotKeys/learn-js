/*
제목: 상수
설명: 숫자를 뒤집어서 비교하는 문제
제출: https://www.acmicpc.net/submit/2908

문제
상근이의 동생 상수는 수학을 정말 못한다. 
상수는 숫자를 읽는데 문제가 있다. 
이렇게 수학을 못하는 상수를 위해서 상근이는 수의 크기를 비교하는 문제를 내주었다. 
상근이는 세 자리 수 두 개를 칠판에 써주었다. 
그 다음에 크기가 큰 수를 말해보라고 했다.

상수는 수를 다른 사람과 다르게 거꾸로 읽는다. 
예를 들어, 734와 893을 칠판에 적었다면, 상수는 이 수를 437과 398로 읽는다. 
따라서, 상수는 두 수중 큰 수인 437을 큰 수라고 말할 것이다.

두 수가 주어졌을 때, 상수의 대답을 출력하는 프로그램을 작성하시오.

입력
첫째 줄에 상근이가 칠판에 적은 두 수 A와 B가 주어진다. 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.

출력
첫째 줄에 상수의 대답을 출력한다.

예제 입력 1
734 893
예제 출력 1
437

예제 입력 2
221 231
예제 출력 2
132

예제 입력 3
839 237
예제 출력 3
938
*/

function main() {
  const data = getData();

  const number1 = parseInt(reverseWord(data[0]));
  const number2 = parseInt(reverseWord(data[1]));
  result = Math.max(number1, number2);

  console.log(result);
}

main();

/**
 * 가져온 인자를 역순으로 반환한다
 * @returns {string}
 */
function reverseWord(arg) {
  const original = arg;
  let reversed = new Array();

  for (let i = 1; i <= original.length; i++) {
    reversed.push(original[original.length - i]);
  }
  result = reversed.join("");
  return result;
}

/**
 * 표준 입력장치(console)에서 한 줄로 입력된 데이터를 읽어서 배열로 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split(" "); // 입력값을 가져오고 공백 기준으로 나누어 저장

  return arr;
}
