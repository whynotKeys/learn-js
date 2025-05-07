(() => {
  /*
  기본 함수
  */
  
  console.log("Hello Function!");
  
  // 함수 생성
  function sayHello() {
    console.log("안녕 Function!");
  }
  
  // 함수 호출
  sayHello();
  
  for (let i = 0; i < 4; i++) {
    sayHello();
  }
  
})();
