/*
기본 데이터 타입 - BigInt
*/

var maxNum = Number.MAX_VALUE; // number로 표현 가능한 최대값
var maxSafeNum = Number.MAX_SAFE_INTEGER; // 정확한 정수의 최대값(9007199254740991, 약 9000조)

console.log(maxNum, maxSafeNum);

console.log(maxSafeNum-1, maxSafeNum, maxSafeNum + 1, maxSafeNum + 2, maxSafeNum + 3);

// BigInt
var b1 = 12345n;
var b2 = BigInt(maxSafeNum);

console.log(b2-1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);
