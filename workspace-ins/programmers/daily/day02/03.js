/*
분류: 출력
문제: 문자열 돌리기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181945?language=javascript

문제 설명
문자열 str이 주어집니다.
문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

제한사항
1 ≤ str의 길이 ≤ 10

입출력 예
입력 #1
abcde
출력 #1
a
b
c
d
e
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = [line];
}).on('close',function(){
  str = input[0];
  printStr(str);
});


// 전달받은 문자열을 시계 방향으로 90도 회전한 모양으로 출력한다.
function printStr(msg){
  // hello일 경우
  // for(let s of msg){ // s=h, s=e, s=l, s=l, s=o
  //   console.log(s);
  // }

  // hello일 경우
  for(let i=0; i<msg.length; i++){ // i=0, 1, 2, 3, 4
    console.log(i, msg[i]);
  }
}