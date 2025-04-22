/*
[비교 연산자 실습]

다음 값들을 비교한 결과를 예측하고 실제 결과와 비교해보세요.
예측한 결과를 주석으로 작성하고, console.log()를 통해 실제 결과를 확인해보세요.

문제1. 다음 비교 연산의 결과는 true일까요? false일까요?
*/

// 1-1. '3' === 3
// 예측: false
// 설명: === 연산자는 타입과 값 모두를 비교합니다. '3'은 문자열이고 3은 숫자이므로 타입이 다릅니다.
console.log('1-1:', '3' === 3);  // false (타입이 다르므로 false)

// 1-2. '3' == 3
// 예측: true
// 설명: == 연산자는 타입 변환을 수행한 후 비교합니다. 문자열 '3'이 숫자 3으로 변환되어 비교됩니다.
console.log('1-2:', '3' == 3);   // true (자동 형변환으로 인해 true)

// 1-3. 0 === false
// 예측: false
// 설명: === 연산자는 타입과 값 모두를 비교합니다. 0은 숫자이고 false는 불리언이므로 타입이 다릅니다.
console.log('1-3:', 0 === false);  // false (타입이 다르므로 false)

// 1-4. 0 == false
// 예측: true
// 설명: == 연산자는 타입 변환을 수행한 후 비교합니다. 숫자 0은 불리언 false로 변환되어 비교됩니다.
console.log('1-4:', 0 == false);   // true (자동 형변환으로 인해 true)
console.log('1-4-2:', '1' == true);   // 1 === 1 => true (문자열 '1'이 숫자 1로 변환되고, true도 1로 변환되어 비교)

// 1-5. '' == false
// 예측: true
// 설명: == 연산자는 타입 변환을 수행한 후 비교합니다. 빈 문자열 ''은 0으로 변환되고, false도 0으로 변환되어 비교됩니다.
console.log('1-5:', '' == false);  // true (자동 형변환으로 인해 true) // 0 === 0

/*
문제2. 크기 비교
age1과 age2를 비교하여 age1이 더 나이가 많으면 true, 아니면 false를 출력하세요.
*/
let age1 = '20';
let age2 = 19;
// 결과: true
// 설명: 문자열 '20'이 숫자로 자동 변환되어 20 > 19 비교가 이루어집니다.
console.log('문제2:', age1 > age2);  // true, 20 > 19

/*
문제3. 문자열 비교
str1과 str2를 비교하여 str1이 사전순으로 더 앞에 있으면 true, 아니면 false를 출력하세요.
*/
let str1 = 'apple';
let str2 = 'banana';
// 결과: true
// 설명: 문자열은 사전순으로 비교됩니다. 'apple'은 'banana'보다 알파벳 순서상 앞에 위치합니다.
console.log('문제3:', str1 < str2);  // true (사전순으로 apple이 banana보다 앞에 있음)

/*
문제4. null과 undefined 비교
다음 비교 연산의 결과를 예측해보세요.
*/

// 4-1. null === undefined
// 예측: false
// 설명: === 연산자는 타입과 값 모두를 비교합니다. null은 object 타입이고 undefined는 undefined 타입입니다.
var emptyVal; // undefined 타입, 값은 undefined
var nullVal = null; // object 타입, 값은 null
console.log('4-1:', emptyVal === nullVal);  // false (타입이 다르므로 false)

// 4-2. null == undefined
// 예측: true
// 설명: == 연산자는 null과 undefined를 동등하게 취급합니다.
console.log('4-2:', emptyVal == null);   // true (느슨한 비교에서는 true)
console.log('4-3:', emptyVal == undefined);   // true (느슨한 비교에서는 true)

/*
문제5. 응용
다음 변수들을 비교하여 가장 큰 수를 찾으세요.
*/
let num1 = '93434';
let num2 = 1330;
let num3 = 171;
let num4 = '12';
// 가장 큰 수: 93434
// 설명: Math.max() 함수를 사용하여 가장 큰 수를 찾습니다. 문자열로 된 숫자는 Number() 함수를 사용하여 숫자로 변환합니다.
// num1 = +num1;  // 방법1: 단항 연산자 사용
// num1 = Number(num1);  // 방법2: Number() 함수 사용
// num1 = parseInt(num1);  // 방법3: parseInt() 함수 사용

let maxNum = Math.max(Number(num1), num2, num3, Number(num4));

console.log('가장 큰 수:', maxNum);  // 93434


