(() => {
  /*
    함수 생성 2 (표현식)
  */
  
  // 로또 1등 당첨 확률은? => for문으로 구현
  // 45!/((45-6)!*6)
  var lotto = function getFactorial(n) {
    let result = 1;
    for (let i = n; i > 1; i--) {
      result *= i;
    }
    return result;
  };
  
  console.log("로또 1등 당첨 확률은 1/" + lotto(45) / (lotto(45 - 6) * lotto(6)));
  
  // 로또 1등 당첨 확률은? => 재귀함수로 구현
  // 표현식 방식의 함수 선언(기명함수 사용예)
  var f = function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
  };
  
  console.log(f(5));
  // console.log(factorial(5)); // 변수에 정의했기 때문에 이런 방식으로 호출 불가
  
  console.log("로또 1등 당첨 확률은 1/" + f(45) / (f(45 - 6) * f(6)));
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
