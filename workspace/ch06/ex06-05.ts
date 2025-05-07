// 유니언 타입(union type)

(() => {
  function logString(msg: string) {
    console.log(msg);
  }
  function logNumber(msg: number) {
    console.log(msg);
  }
  // 유니언 타입
  function logBoth(msg: string | number) {
    console.log(msg);
  }

  logString("Hello");
  logNumber(123);

  logBoth("Hello");
  logBoth(123);
})();
