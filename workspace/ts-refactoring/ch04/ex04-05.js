// ex02-23.js 복사

// js/mylib.js파일로 memo(캐싱 함수) 이동!!!
// 함수에 메모이제이션 기능 추가
// Function.prototype.memo = function (key) {
//   this._cache = this._cache || {}; // 캐시 객체 초기화(있으면 사용, 없으면 생성)

//   if (this._cache[key] !== undefined) {
//     // key에 대해서 계산이 끝나고 캐싱된 경우
//     return this._cache[key]; // 캐시된 값 반환
//   } else {
//     return (this._cache[key] = this(key)); // isPrime 함수를 호출해서 결과를 받은 후 캐시에 저장
//   }
// };

// 지정한 수가 소수인지 여부를 반환
var isPrime = function (num) {
  // 소수 판별 코드
  let prime = true; // 소수 여부

  //무식한 방법
  // for (let i = 2; i <= Math.sqrt(num); i++) {
  for (let i = 2; i < num; i++) {
    // test 목적으로 시간 더 걸리게 해둠
    //제곱근
    if (num % i === 0) {
      prime = false; // 소수가 아니면 false로 변경
      break; // 반복문 탈출
    }
  }
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

console.time("소요시간");
console.log("3 -> ", isPrime.memo(3));
console.log("4 -> ", isPrime.memo(4));
console.log("5 -> ", isPrime.memo(5));
console.log("6 -> ", isPrime.memo(6));
console.log("7 -> ", isPrime.memo(7));
console.log("8 -> ", isPrime.memo(8));
console.log("9 -> ", isPrime.memo(9));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.log("1000000007 -> ", isPrime.memo(1000000007));
console.timeEnd("소요시간");
