(() => {
  const topLevel = "최상위 변수";
  
  function outer() {
    const innerVal = "outer의 지역변수"; // 자유변수(:closure에 의해서 참조되는 변수) 함수 실행 후에도 사라지지 않는 변수
    console.log(topLevel); // 하위 Scope에서 접근 가능
    console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능, 함수 실행이 끝나면 사라짐
  
    /*
    * closure(클로저)
      - 외부함수(outer)의 지역변수(innerVal)를 
        외부함수의 실행 완료 후에도 내부 함수의 호출로 참조하는 현상. 또는 그 내부 함수
        
      - closure가 만들어지는 조건
        1. 함수 내부에서 함수를 생성(중첩함수, 내부함수)
        2. 내부함수가 외부함수의 지역변수를 참조
     */
    const fn = function () {
      console.log(innerVal);
    };
    return fn;
  }
  
  const returnFn = outer();
  console.log(topLevel); // 같은 Scope 내에서 접근 가능
  // console.log(innerVal); // 지역변수는 선언한 함수내에서만 접근 가능
  
  returnFn();
  
})();
