/*
기본 데이터 타입 - Number, String, Boolean, undefined, null
*/

// number 타입
// 정수형 숫자
var num = 100;
// 실수형 숫자 (부동소수점)
var floatNum = 3.14;

// string 타입
// 작은따옴표로 감싼 문자열
var s1 = 'single quote';
// 큰따옴표로 감싼 문자열
var s2 = "double quote";

// boolean 타입
// 참(true)을 나타내는 값
var b1 = true;
// 거짓(false)을 나타내는 값
var b2 = false;

// undefined 타입
// 변수는 선언되었지만 값이 할당되지 않은 상태
var emptyVal;

// null 타입
// 의도적으로 값이 없음을 나타내는 특별한 값
// typeof 연산자는 null을 object 타입으로 반환함
var nullVal = null;

// 변수들의 값 출력
console.log(num, floatNum, s1, s2, b1, b2, emptyVal, nullVal);
// 각 변수의 데이터 타입 출력
console.log(typeof num, typeof floatNum, typeof s1, typeof s2, typeof b1, typeof b2
            , typeof emptyVal, typeof nullVal);

