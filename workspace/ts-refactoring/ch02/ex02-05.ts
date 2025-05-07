(() => {
  /*
    함수 생성 1 (선언문)
  */
  
  // 선언문 방식의 함수 선언
  
  function add(x, y) {
    console.log(this);
    return x + y;
  }
  console.log(add(10, 20)); // 30, this = window
  console.log(add.call({ name: "call" }, 30, 40)); // 70, this = { name: "call" }
  console.log(add.apply({ name: "apply" }, [50, 60])); // 110, this = { name: "apply" } // apply는 인자 2개만 : 2번째 인자는 배열로 전달
  
})();
