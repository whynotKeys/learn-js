/*
Symbol
- ES6에서 도입된 원시 타입
- 유일하고 변경 불가능한 값을 생성
- 객체의 프로퍼티 키로 사용 가능
- 같은 설명(description)으로 생성된 Symbol도 서로 다른 값을 가짐
*/

// 문자열 비교
var s1 = 'hello';
var s2 = 'world';
var s3 = 'hello';

console.log(s1 === s2); // false - 다른 문자열
console.log(s2 === s3); // false - 다른 문자열
console.log(s1 === s3); // true - 같은 문자열

// Symbol 비교
var s1 = Symbol('hello'); // 'hello'라는 설명을 가진 Symbol 생성
var s2 = Symbol('world'); // 'world'라는 설명을 가진 Symbol 생성
var s3 = Symbol('hello'); // 'hello'라는 설명을 가진 새로운 Symbol 생성

console.log(s1 === s2); // false - 서로 다른 Symbol
console.log(s2 === s3); // false - 서로 다른 Symbol
console.log(s1 === s3); // false - 같은 설명을 가졌지만 서로 다른 Symbol