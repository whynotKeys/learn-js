(() => {
  /*
  나머지 매개변수(Rest parameters)
  */
  
  function fn(...args) {
    // 가변인자
    console.log(args);
    for (let arg of args) {
      console.log(arg);
    }
  }
  
  fn();
  fn(1);
  fn(1, 2);
  fn(1, 2, 3);
  fn(1, 2, 5, 34, 34, 23, 45, 234, 45456, 234, 234, 324);
  
})();
