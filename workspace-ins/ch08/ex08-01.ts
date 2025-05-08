// 에러 핸들링 - Error 객체

(()=>{

  function f1() {
    const err = new Error('에러 발생!!!');
    console.log(err.name);
    console.log(err.message);
    console.log(err.stack);
  }

  function f2() {
    f1();
  }

  f2();

})();
