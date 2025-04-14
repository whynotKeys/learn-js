/*
논리 연산자 &&, ||, !
*/

// 논리합(OR): 
// 피연산자 둘 중 하나라도 true일 경우 true가 됨. 
// 둘다 false일 경우에만 false가 됨.
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// ID 유효성 검사 예제
var id = 'honkjsdhfkjshdfiuwyehrifu';
// ID 길이가 4보다 작거나 12보다 큰 경우 invalid
var invalidId = id.length < 4 || id.length > 12;
// 위와 동일한 조건을 AND와 NOT을 사용하여 표현
var invalidId = !(id.length >= 4 && id.length <= 12);
console.log('id 입력 조건에 맞지 않음', invalidId);

// OR 연산자의 특성
// 앞의 값이 참이면 앞의 값을 반환
// 앞의 값이 거짓이면 뒤의 값을 반환
// falsy 값들: number 0, string '', boolean false, object null, undefined undefined
// truthy 값들: 100, ' ', 'hello', true

// OR 연산자 예제들
console.log('hello' || 'world'); // hello (앞의 값이 truthy)
console.log(90 || 30); // 90 (앞의 값이 truthy)
console.log(null || 'guset'); // guset (앞의 값이 falsy)
console.log(undefined || 'guset'); // guset (앞의 값이 falsy)
console.log(0 || 30); // 30 (앞의 값이 falsy)
console.log('' || 'guset'); // guset (앞의 값이 falsy)

// let userName = '체리핑';
// let userName = '';
// let userName = null;
let userName = undefined;
let userAge = 0;

// 기본값 설정 예제
console.log(userName || '널핑'); // userName이 falsy면 '널핑' 출력
console.log(userAge || '나이 미상'); // userAge가 falsy면 '나이 미상' 출력

// 논리곱(AND): 
// 피연산자 둘 다 true일 경우 true가 됨. 
// 둘 중 하나라도 false일 경우 false가 됨.
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

// AND 연산자의 특성
// 앞의 값이 참이면 뒤의 값을 반환
// 앞의 값이 거짓이면 앞의 값을 반환

// 안전한 속성 접근 예제
// id = null; // type은 object
console.log('글자수', id && id.length); // id가 null이면 null 반환
console.log('글자수', id?.length); // 옵셔널 체이닝 연산자 사용