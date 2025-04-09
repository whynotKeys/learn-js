/*
JSON 표기법 - 리터럴 방식으로 객체 생성
JavaScript Object Notation => {} 요 중괄호에 담는 게 JSON 표기법
*/

const foo = {
  // JSON 표기법으로 객체 생성 및 값 정의
  name: "JSON핑",
  age: 7,
  job: "요정",
  married: true,
};

console.log(foo["name"], foo["age"], foo.job, foo.married); // key값에 특수문자(-이런거) 있으면 []로만 접근 가능

console.log(typeof foo); // object
console.log(foo.toString()); // [object Object]
console.log(foo); // object {name: '함수핑', age:6, job:'마법사', married:false}

foo.added = "추가속성"; // 속성 추가
console.log(JSON.stringify(foo)); // string 형태의 {"name":"함수핑","age":6,"job":"마법사","married":false}
console.log(JSON.stringify(foo, null, 2)); // 줄바꿈까지

// --------

// 네트워크로 전송할 때/파일로 저장할 때는 꼭 문자열을 큰따옴표로 감싸야 함
// TODO JSON.stringfy() 함수를 사용하면 객체를 JSON 형태의 문자열로 변환 가능
const strFoo = JSON.stringify(foo);
console.log("strFoo", strFoo);

console.log(foo.job, strFoo.job); // 요정, undefined(문자열이라 .으로 속성 못꺼냄)

const objFoo = JSON.parse(strFoo); // JSON 형태의 문자열을 객체로 변환
console.log(objFoo.job); // 요정

// 함수가 있는 객체는 JSON.stringify()로 변환 시 함수가 제외 됨
const score = {
  kor: 100,
  eng: 90,
  math: 85,
  sum: function () {
    // 총점을 반환한다
    // this = score 지칭. 객체의 메서드가 자신의 속성을 접근할 때 this 사용
    return this.kor + this.eng + this.math;
    // return score.kor + score.eng + score.math; // 동일한 의미
  },
  avg: function () {
    // 평균을 반환한다
    return this.sum() / 3;
  },
};

const scoreStr = JSON.stringify(score); // JSON 형태의 문자열로 변환
console.log(scoreStr);

const foffo = JSON.parse(scoreStr);
console.log(foffo);
