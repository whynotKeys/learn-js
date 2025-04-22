/*
객체의 속성 관리
객체의 프로퍼티를 읽기, 갱신, 생성, 삭제하는 방법을 보여주는 예제
*/

// 객체 생성
const foo = {
  name: '푸푸핑',
  mainJob: 'magician',
};

// 객체 프로퍼티 읽기
// 점 표기법(foo.name)과 대괄호 표기법(foo['mainJob'])으로 프로퍼티에 접근할 수 있음
// 존재하지 않는 프로퍼티(subJob)는 undefined를 반환
console.log(foo.name, foo['mainJob'], foo.subJob);

// 객체 프로퍼티 갱신
// 점 표기법을 사용하여 기존 프로퍼티의 값을 변경
foo.mainJob = 'fairy';
console.log(foo.name, foo['mainJob'], foo.subJob);

// 객체 프로퍼티 동적 생성
// 존재하지 않는 프로퍼티에 값을 할당하면 새로운 프로퍼티가 생성됨
foo.subJob = 'celeb';
console.log(foo.name, foo['mainJob'], foo.subJob);

// 객체 프로퍼티 삭제
// delete 연산자를 사용하여 프로퍼티를 삭제할 수 있음
delete foo.mainJob;
console.log(foo.name, foo['mainJob'], foo.subJob);

// 객체의 모든 프로퍼티 읽기
// for...in 루프를 사용하여 객체의 모든 프로퍼티를 순회할 수 있음
// prop 변수에는 각 프로퍼티의 이름이 할당됨
for (let prop in foo) { // 1) prop='name', 2) prop='subJob'
  console.log(prop, foo[prop]);
}