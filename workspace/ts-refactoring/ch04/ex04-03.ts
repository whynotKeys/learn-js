(() => {
  function sum(a, b, c){
    return a + b + c;
  }
  console.log(sum(10, 20, 30));
  
  
  let currySum = function (a){
    return function(b){
      return function(c){
        return a + b + c;
      }
    }
  }
  
  // 같은 내용을 화살표 함수로 변경한 것
  function currySum(a){
    return (b) => {
      return (c) => {
        return a + b + c;
      }
    }
  }
  
  // 실행문 1개라서 중괄호+return 생략, 선언문 형식으로 변경
  currySum = (a) => (b) => (c) => a + b + c;    
  
  // 매개변수 1개라서 괄호 생략
  currySum = a => b => c => a + b + c;    
  // 지금은 별도의 curry함수를 만들었지만 로데쉬 library로 이런 과정 없이 바로 사용 가능함
  
  console.log(currySum(10)(20)(30)); // 선언문 방식으로 함수 정의 시 호이스팅 덕에 위에 있어도 되지만 선언문 방식으로 쓸 경우 함수 정의보다 더 아래에 위치해야 함
})();
