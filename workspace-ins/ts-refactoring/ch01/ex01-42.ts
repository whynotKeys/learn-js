(() => {
  /*
  기본값 매개변수(Default parameters)
  */
  
  // b가 전달되지 않을 경우에는 a만 반환
  function sum(a, b){
    return a + b;
  }
  
  function sum(a, b){
    if(b === undefined) {
      return a;
    }else{
      return a + b;
    }
  }
  
  function sum(a, b){
    if(b === undefined) {
      b = 0;
    }
    return a + b;
  }
  
  function sum(a, b){
    b = b || 0;
    return a + b;
  }
  
  function sum(a, b=0){
    return a + b;
  }
  
  console.log(sum(10, 20));
  console.log(sum(50));
  
})();
