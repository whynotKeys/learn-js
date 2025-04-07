/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
true/false 값으로 판단
*/

var a = 5;
var b = 10;
var c = '5';
var d = 5;

// > (크다)
console.log(a > b); // 5 > 10 = false

// < (작다)
console.log(a < b); // 5 < 10 = true

// >= (크거나 같다)
console.log(a >= d); // 5 >= 5 = true

// <= (작거나 같다)
console.log(a <= d); // 5 <= 5 = true

// 문자열 비교
console.log(a == c); // 동등, 5 == '5' => 5 === 5 => true
console.log(a === c); // 일치, 5 === '5' => number === string => false

console.log('ch05' > 'ch01'); // 사전순으로 비교, true
console.log('ch12' > 'ch2'); // 사전순으로 비교, false
// ch05, ch12, ch2, ch01 오름차순 정렬 순서
// ch01, ch05, ch12, ch2
