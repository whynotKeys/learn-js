/*
분류: 출력
문제: 문자열 반복해서 출력하기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181950?language=javascript

문제 설명
문자열 str과 정수 n이 주어집니다.
str이 n번 반복된 문자열을 만들어 출력하는 코드를 작성해 보세요.

제한사항
1 ≤ str의 길이 ≤ 10
1 ≤ n ≤ 5

입출력 예
입력 #1
string 5

출력 #1
stringstringstringstringstring
*/

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');
}).on('close', function () {
  str = input[0];
  n = Number(input[1]);

  const result = getRepeat(str, n);

  console.log(result);
});



// 문자열과 반복할 정수를 전달 받아서 문자열을 반복할 횟수만큼 붙여서 반환한다.
function getRepeat(str, num){
  let result = '';
  for(let i=0; i<num; i++){ // 0, 1, 2, 3, 4
    result += str; // 'string', 'stringstring', 'stringstringstring', 'stringstringstringstring', 'stringstringstringstringstring'
  }
  return result;
}