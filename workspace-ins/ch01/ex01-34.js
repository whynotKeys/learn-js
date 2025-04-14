/*
반환값이 있는 함수 - 토스터
*/

/**
 * 주어진 시간동안 빵을 구워서 토스트를 만드는 함수
 * @param {number} time - 토스트를 굽는 시간(초)
 * @param {string} bread - 빵의 종류
 * @returns {string} 구워진 토스트에 대한 설명 문자열
 * @example
 * toaster(40, '우유 식빵') // returns '40초 동안 구워진 우유 식빵'
 */
function toaster(time, bread){
  return time + '초 동안 구워진 ' + bread;
}

// 실행 예시 1: 모든 매개변수 전달
const toast1 = toaster(40, '우유 식빵'); // '40초 동안 구워진 우유 식빵'

// 실행 예시 2: bread 매개변수 생략 - undefined로 처리됨
const toast2 = toaster(60);

console.log(toast1);
console.log(toast2);

