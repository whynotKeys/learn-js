/*
객체의 속성 관리
*/

const foo = {
  name: "푸푸핑",
  mainJob: "fairy",
};

// 객체 프로퍼티 읽기
console.log(foo.name, foo["mainJob"], foo.subJob); // 푸푸핑 fairy undefined

// 객체 프로퍼티 갱신
foo.mainJob = "wizard";
console.log(foo.name, foo["mainJob"], foo.subJob); // 푸푸핑 wizard undefined

// 객체 프로퍼티 동적 생성
foo.subJob = "셀럽";
console.log(foo.name, foo["mainJob"], foo.subJob); // 푸푸핑 wizard 셀럽

// 객체 프로퍼티 삭제
delete foo.mainJob;
console.log(foo.name, foo["mainJob"], foo.subJob); // 푸푸핑 undefined 셀럽

console.log("객체의 모든 프로퍼티 읽기");
// 객체의 모든 프로퍼티 읽기
for (let prop in foo) {
  console.log(prop); // 속성명
  console.log(foo[prop]); // 값
  console.log(foo.prop); // 이건 안됨 요렇게는 속성에 접근 불가 : undefined
}
console.log(foo);
