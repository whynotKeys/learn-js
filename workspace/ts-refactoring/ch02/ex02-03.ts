(() => {
  /*
  * 자바스크립트의 함수는 일급 객체이다.
    - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
    - 함수의 인자로 전달될 수 있다.
    - 함수의 결과 값으로 반환될 수 있다.
    - 리터럴로 생성될 수 있다.
    - 동적으로 생성된 프로퍼티를 가질 수 있다.
  */
  
  // 함수는 함수의 결과 값으로 반환될 수 있다.
  function foo() {
    console.log("foo 호출.");
    return function () {
      console.log("bar 호출.");
      return function () {
        console.log("baz 호출.");
      };
    };
  }
  
  const bar = foo(); // foo 함수의 리턴값(함수)
  const baz = bar(); // bar 함수의 리턴값(함수)
  
  console.log("foo(); ▼"); // foo를 호출
  foo();
  console.log("------------------");
  
  console.log("foo()(); ▼"); // foo를 호출하고 그 리턴값을 호출
  foo()();
  console.log("------------------");
  
  console.log("foo()()(); ▼"); // foo를 호출하고 그 리턴값의 리턴값을 호출
  foo()()();
  console.log("------------------");
  
  console.log("bar; ▼");
  bar;
  console.log("------------------");
  
  console.log("bar(); ▼");
  bar();
  console.log("------------------");
  
  console.log("baz; ▼");
  baz;
  console.log("------------------");
  
  console.log("baz(); ▼");
  baz();
  console.log("------------------");
  
})();
