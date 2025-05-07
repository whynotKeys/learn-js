(() => {
  /*
    함수 생성 1 (선언문)
  */
  
  // 선언문 방식의 함수 선언
  function add(x, y){
    console.log(this);
    const result = x + y;
    return result;
  }
  
  console.log(add(10, 20)); // 30, this = window
  console.log(add.call({name: '콜핑'}, 30, 40)); // 70, this = {name: '콜핑'}
  console.log(add.apply({name: '어플핑'}, [50, 60])); // 110, this = {name: '어플핑'}
})();
