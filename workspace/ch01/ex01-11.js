/*
비교 연산자 >, >=, <, <=, ==, !=, ===, !==
*/

var a = 5;
var b = 10;
var c = "5";
var d = 5;

// > (크다)
console.log(a > b); // 5 > 10 => false

// < (작다)
console.log(a < b); // 5 < 10 => true

// >= (크거나 같다)
console.log(a >= d); // 5 >= 5 => true

// <= (작거나 같다)
console.log(a <= d); // 5 <= 5 => true

// 문자열 비교 :===(동등) === (일치)
console.log(a === c); // 5==='5' => 값만 비교: true
console.log(a === c); // 5 === '5' => 타입까지 비교: false

console.log("ch05" > "ch01"); // 문자열끼리 비교 : 사전순으로 더 뒷쪽에 있는 게 더 크다고 정의됨
console.log("ch221" > "ch22"); // 문자열끼리 비교
