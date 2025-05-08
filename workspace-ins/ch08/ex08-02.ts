// 에러 핸들링 - 에러가 발생하는 경우
// ex08-01.ts 복사

(()=>{
  function f1() {
    // const obj = null as any;
    const obj = undefined as any;
    // obj.fn();

    const fn = new Function('x', 'y', 'retrun x + y'); // SyntaxError 발생
    console.log(fn(10, 20));
  }

  function f2() {
    f1();
  }

  f2();

  console.log('프로그램 종료.');
})();
