/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation
JSON은 데이터를 저장하고 전송하기 위한 경량의 데이터 교환 형식입니다.
*/

// 객체 리터럴 방식으로 foo 객체 생성
const foo = {
  name: '제이슨핑',
  age: 7,
  job: '요정',
  married: true
};

// JSON 형식으로 객체를 생성하는 또 다른 방법 (모든 키를 큰따옴표로 감싸는 방식)
// const foo = {
//   "name": "제이슨핑",
//   "age": 7,
//   "job": "요정",
//   "married": true
// };

// 객체에 새로운 속성 추가
foo.email = 'json@gmail.com';

// 객체의 속성에 접근하는 두 가지 방법
// 1. 대괄호 표기법: foo['name']
// 2. 점 표기법: foo.job
console.log(foo['name'], foo['age'], foo.job, foo.married);
// object { name: '함수핑', age: 6, job: '마법사', married: false }
console.log(typeof foo, foo);

// JSON 문자열 변환
// TODO ajax 단원에서..., 네트워크로 전송할 때는 꼭 문자열을 큰 따옴표로 감싸야 한다.
// JSON.stringify() 함수를 사용하면 객체를 JSON 형태의 문자열로 변환 가능
const strFoo = JSON.stringify(foo);
console.log('strFoo', typeof strFoo, strFoo);
// 문자열로 변환된 객체는 더 이상 객체가 아니므로 속성에 직접 접근할 수 없음
console.log(foo.job, strFoo.job); // 요정, undefined

// JSON 문자열을 객체로 변환
// TODO ajax 단원에서..., JSON.parse() 함수를 사용하면 JSON 형태의 문자열을 객체로 변환 가능
const objFoo = JSON.parse(strFoo);
console.log('objFoo', typeof objFoo, objFoo);