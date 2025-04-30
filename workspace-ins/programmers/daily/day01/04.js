/*
분류: 출력
문제: 대소문자 바꿔서 출력하기
url: https://school.programmers.co.kr/learn/courses/30/lessons/181949?language=javascript

문제 설명
영어 알파벳으로 이루어진 문자열 str이 주어집니다. 
각 알파벳을 대문자는 소문자로 소문자는 대문자로 변환해서 출력하는 코드를 작성해 보세요.

제한사항
1 ≤ str의 길이 ≤ 20
str은 알파벳으로 이루어진 문자열입니다.

입출력 예
입력 #1
aBcDeFg

출력 #1
AbCdEfG
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
  // console.log(str);
  // console.log(str.length);
  // console.log(str[0]);

  // aBcDeFg
  let result = '';
  for(let i=0; i<str.length; i++){ // i=0, 1, 2, 3, 4, 5, 6
    if(str[i].toUpperCase() === str[i]) { // 대문자면 소문자로
      result = result + str[i].toLowerCase(); // Ab, AbCd, AbCdEf
    }else{ // 소문자면 대문자로
      result += str[i].toUpperCase(); // A, AbC, AbCdE, AbCdEfG
    }
  }
  console.log(result);
});