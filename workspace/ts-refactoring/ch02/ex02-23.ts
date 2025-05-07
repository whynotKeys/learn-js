(() => {
  // 지정한 수가 소수인지 여부를 반환
  var isPrime = function (num) {
    //캐시를 위한 코드
    isPrime._cache = isPrime._cache || {}; // 캐시 객체 초기화(있으면 사용, 없으면 생성)
    if (isPrime._cache[num] !== undefined) { // num에 대해서 계산이 끝나고 캐싱된 경우
      return isPrime._cache[num]; // 캐시된 값 반환
    }
  
    // 소수 판별 코드
    let prime = true; // 소수 여부
  
    //무식한 방법
    // for (let i = 2; i < num/2; i++) { 반보다 적게
    for (let i = 2; i <= Math.sqrt(num); i++) { //제곱근
      if (num % i === 0) {
        prime = false; // 소수가 아니면 false로 변경
        break; // 반복문 탈출
      }
    }
  
    // 캐시를 위한 코드
    isPrime._cache[num] = prime; // 객체 내부에서만 쓰는 경우 _붙여서 표시(private)
  
    return prime; // 소수 여부 반환
  };
  
  console.time("소요시간");
  console.log("3 -> ", isPrime(3));
  console.log("4 -> ", isPrime(4));
  console.log("5 -> ", isPrime(5));
  console.log("6 -> ", isPrime(6));
  console.log("7 -> ", isPrime(7));
  console.log("8 -> ", isPrime(8));
  console.log("9 -> ", isPrime(9));
  console.log("1000000007 -> ", isPrime(1000000007));
  console.log("1000000007 -> ", isPrime(1000000007));
  console.log("1000000007 -> ", isPrime(1000000007));
  console.timeEnd("소요시간");
  
})();
