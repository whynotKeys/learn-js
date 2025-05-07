// 변수의 타입 추론

(()=>{
  // 기본 데이터 타입의 변수 타입을 추론에 의지(권장)
  let name = '이일구'; //string 타입으로 추론
//  name = 219; // string에 number넣어서 에러 발생

  const age = 20; // number 타입으로 추론
  
  let name2; // any 타입으로 추론
  name2 = '이잉';
  name2 = 218
})();
