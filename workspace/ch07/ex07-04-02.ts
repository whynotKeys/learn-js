// 내장 객체 - Math

(()=>{

  // FIXME 주사위를 던져서 1부터 6까지의 숫자 중 하나를 랜덤으로 반환하는 함수
  function rollDice(): number {
    let result = Math.round(Math.random() * 6);
    while(result === 0)  {
          result = Math.round(Math.random() * 6);
        };

    return result; 
  }

  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  console.log(rollDice()); // 1부터 6까지의 숫자 중 하나 출력
  
})();