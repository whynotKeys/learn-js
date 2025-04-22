/*
기본 데이터 타입 - BigInt
JavaScript에서 큰 정수를 다루기 위한 BigInt 타입에 대한 예제
*/

// Number 타입으로 표현 가능한 최대값 (약 1.79e+308)
var maxNum = Number.MAX_VALUE; // number로 표현 가능한 최대값

// JavaScript에서 정확하게 표현 가능한 최대 정수값 (9007199254740991, 약 9000조)
// 이 값을 넘어가면 정확성이 보장되지 않음
var maxSafeNum = Number.MAX_SAFE_INTEGER; // 정확한 정수의 최대값(9007199254740991, 약 9000조)

// 최대값들을 출력
console.log(maxNum, maxSafeNum);

// MAX_SAFE_INTEGER 주변의 숫자들을 출력
// MAX_SAFE_INTEGER를 넘어가면 정확성이 보장되지 않음을 보여줌
console.log(maxSafeNum-1, maxSafeNum, maxSafeNum + 1, maxSafeNum + 2, maxSafeNum + 3);

// BigInt 타입 사용 예시
// 숫자 뒤에 'n'을 붙여 BigInt 리터럴 생성
var b1 = 12345n;
// Number.MAX_SAFE_INTEGER를 BigInt로 변환
var b2 = BigInt(maxSafeNum);

// BigInt 연산 예시
// BigInt 연산에서는 모든 숫자 뒤에 'n'을 붙여야 함
// MAX_SAFE_INTEGER를 넘어도 정확한 계산이 가능함
console.log(b2-1n, b2, b2 + 1n, b2 + 2n, b2 + 3n);
