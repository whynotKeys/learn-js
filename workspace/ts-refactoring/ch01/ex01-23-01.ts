(() => {
  /*
  TODO 생성자 함수
  new Object() - 생성자 함수로 객체 생성
  */
  
  const foo = new Object(); // 생성자 함수로 빈 객체 생성 후
  // 필요한 속성 추가
  
  foo.name = "함수핑";
  foo["age"] = 6;
  foo.job = "마법사";
  foo["married"] = false;
  
  // 꺼내는 방법 : 1. 대괄호 2. .으로 연결
  console.log(foo["name"], foo["age"], foo.job, foo.married); // key값에 특수문자(-이런거) 있으면 []로만 접근 가능
  
  console.log(typeof foo); // object
  console.log(foo.toString()); // [object Object]
  console.log(foo); // object {name: '함수핑', age:6, job:'마법사', married:false}
  
  console.log(JSON.stringify(foo)); // string 형태의 {"name":"함수핑","age":6,"job":"마법사","married":false}
  console.log(JSON.stringify(foo, null, 2)); // 줄바꿈까지
  
})();
