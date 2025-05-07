(() => {
  /*
    함수 생성 2 (표현식)
  */
  
  // 표현식 방식의 함수 선언(기명함수 사용예)
  // 전달받은 숫자의 팩토리얼 값을 구해서 반환하는 함수
  var f = function factorial(n){
    let result = 1;
    for(let i=n; i>0; i--){
      result *= i;
    }
    return result;
  }
  
  var f = function factorial(n){
    if(n === 1) return 1;
    // 5 * 4 * 3 * 2 * 1
    return n * factorial(n-1);
  };
  
  console.log(f(5));
  // console.log(factorial(5));
  
  // 로또 1등 당첨 확률은?
  // 45!/((45-6)!*6!)
  console.log('로또 1등 당첨 확률은 1/' + f(45)/(f(45-6)*f(6)));
  
  /*
    5!
    = 5 * 4 * 3 * 2 * 1
    = 5 * 4!
    = 5 * 4 * 3!
    = 5 * 4 * 3 * 2!
    = 5 * 4 * 3 * 2 * 1!
    
    n!
    = n * (n-1)!
  */
  
})();
