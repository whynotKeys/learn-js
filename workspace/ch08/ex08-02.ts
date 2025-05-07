// 에러 핸들링 - 에러가 발생하는 경우
// ex08-01.ts 복사

(() => {
  function f1() {
    // const obj = null as any; // test용. 변환 시 에러로 인식하지 않게 하기 위해 any로 정의해둠
    const obj = undefined as any; // test용. 변환 시 에러로 인식하지 않게 하기 위해 any로 정의해둠
    // obj.fn(); // TypeError 발생

    const fn = new Function("x", "y", "retrun x + y"); // SyntaxError 발생
    console.log(fn(10, 20)); 
  }

  function f2() {
    f1();
  }

  f2();

  console.log("프로그램 종료"); // 위에서 에러가 발생되면 이 내용은 출력되지 않음
})();
