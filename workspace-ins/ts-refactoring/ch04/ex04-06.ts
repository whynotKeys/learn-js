(() => {
  // ex02-23.js 복사
  
  (() => {
    // 지정한 수가 소수인지 여부를 반환
    let isPrime = (function(num){ // num = 5
      // 소수 판별 코드
      let prime = true;
  
      for(let i=2; i<num; i++){
        if(num % i === 0){
          prime = false;
          break;
        }
      }
      
      return prime;
    }).memoize();
  
    // isPrime 함수에 메모이제이션 기능 추가
    // isPrime = isPrime.memoize();
  
    console.time('소요시간');
    console.log('3 -> ', isPrime(3));
    console.log('4 -> ', isPrime(4));
    console.log('5 -> ', isPrime(5));
    console.log('6 -> ', isPrime(6));
    console.log('7 -> ', isPrime(7));
    console.log('8 -> ', isPrime(8));
    console.log('9 -> ', isPrime(9));
    console.log('1000000007 -> ', isPrime(1000000007));
    console.log('1000000007 -> ', isPrime(1000000007));
    console.log('1000000007 -> ', isPrime(1000000007));
    console.timeEnd('소요시간');
  
  
  })();
  
  
  
})();
