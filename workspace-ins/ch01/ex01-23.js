/*
TODO Object 생성자 함수
new Object() - 생성자 함수로 객체 생성
*/

// Object 생성자 함수를 사용하여 새로운 객체 생성
const foo = new Object();

// 객체에 속성 추가 방법 1: 점 표기법(dot notation)
foo.name = '함수핑';
foo.job = '마법사';

// 객체에 속성 추가 방법 2: 대괄호 표기법(bracket notation)
foo['age'] = 6;
foo['married'] = false;

// 객체의 속성 접근 방법 1: 대괄호 표기법
console.log(foo['name'], foo['age'], foo.job, foo.married);
// 출력: 함수핑 6 마법사 false

// 객체의 타입과 전체 객체 출력
console.log(typeof foo, foo);
// 출력: object { name: '함수핑', age: 6, job: '마법사', married: false }