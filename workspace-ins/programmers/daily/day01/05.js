/*
분류: 출력
문제: 특수문자 출력하기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181948?language=javascript

문제 설명
다음과 같이 출력하도록 코드를 작성해 주세요.

출력 예시
!@#$%^&*(\'"<>?:;

*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('close', function () {
  // \: 이스케이프 문자. \n, \t
  // \ 자체를 문자로 표현하고 싶으면 \\
  // " 자체를 문자롤 표한하고 싶으면 \"
  console.log(`!@#$%^&*(\\'"<>?:;`);
});