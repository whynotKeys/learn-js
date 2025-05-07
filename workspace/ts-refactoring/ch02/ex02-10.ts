(() => {
  /*
    함수 생성 4 (화살표 함수 표현식)
  */
  
  // 기존 함수
  let add = function (x, y) {
    return x + y;
  };
  
  // 화살표 함수 -> function 키워드 삭제, 매개변수와 수식 사이에 '=>' 추가
  add = (x, y) => {
    return x + y;
  };
  
  // 화살표 함수 축약
  // 실행할 코드가 하나라면 중괄호와 return을 생략 가능
  add = (x, y) => x + y;
  
  console.log(add(10, 20));
  
  console.log("----------------------------");
  
  // 기존 함수
  let add10 = function (x) {
    return x + 10;
  };
  
  // 화살표 함수
  add10 = (x) => {
    return x + 10;
  };
  
  // 화살표 함수 축약
  add10 = (x) => x + 10;
  
  console.log(add10(10));
  
})();
