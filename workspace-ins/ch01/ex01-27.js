/*
배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
이 예제는 배열을 순회하는 다양한 방법을 보여줍니다.
*/

// 테스트용 배열 정의
// 배열은 순서가 있는 값들의 집합으로, 각 값은 인덱스로 접근 가능합니다.
const arr = [10, 20, 30];
// const arr = [4,5,2,5,6,6];

// 배열의 모든 요소 출력(for)
console.log('for');
// 기본 for 루프를 사용한 배열 순회
// i는 인덱스(0부터 시작), elem은 해당 인덱스의 값
// arr.length는 배열의 길이를 반환합니다 (이 경우 3)
for (let i = 0; i < arr.length; i++) { // i=0, i=1, i=2 경우에 for 문이 실행됨
  const elem = arr[i]; // arr[0], arr[1], arr[2]
  console.log(i, elem); // 0 10, 1 20, 2 30
}

// 배열의 합계, 홀수 합계, 짝수 합계를 계산하는 코드
// sum: 전체 합계를 저장할 변수
// oddSum: 홀수 값들의 합계를 저장할 변수
// evenSum: 짝수 값들의 합계를 저장할 변수
let sum = 0;
let oddSum = 0;
let evenSum = 0;

// 배열의 각 요소를 순회하면서 합계 계산
for (let i=0; i < arr.length; i++){
  const num = arr[i]; // 현재 순회 중인 배열 요소
  sum += num; // 0 + 10 + 20 + 30
  // % 연산자는 나머지를 반환합니다. num % 2가 0이면 짝수, 1이면 홀수
  if (num % 2 === 0) { // 짝수
    evenSum += num; // 짝수인 경우 evenSum에 더함
  } else { // 홀수
    oddSum += num; // 홀수인 경우 oddSum에 더함
  }
}

// 계산된 결과 출력
console.log('합계', sum); // 전체 합계 출력
console.log('홀수 합계', oddSum); // 홀수 값들의 합계 출력
console.log('짝수 합계', evenSum); // 짝수 값들의 합계 출력

// 이훈진
// 객체를 사용하여 합계를 계산하는 개선된 버전
// 객체의 속성으로 각 합계를 관리하여 코드를 더 구조화
/*
const sum = {
  total: 0,  // 전체 합계를 저장하는 속성
  even: 0,   // 짝수 합계를 저장하는 속성
  odd: 0,    // 홀수 합계를 저장하는 속성
};

// for...of 루프를 사용한 배열 순회
// for...of는 배열의 각 요소를 직접 순회할 때 사용
for (const num of arr) {
  sum.total += num; // 전체 합계에 현재 숫자 더하기
  // 삼항 연산자를 사용하여 짝수/홀수 판별 및 합계 계산
  // 조건 ? 참일 때 실행 : 거짓일 때 실행
  num % 2 === 0 ? (sum.even += num) : (sum.odd += num);
}

// 계산된 결과 출력
console.log("총합:", sum.total);
console.log("짝수 합:", sum.even);
console.log("홀수 합:", sum.odd);
*/

// 인덱스가 필요한 경우의 for 루프 사용 예시
// 배열의 인덱스와 값을 모두 사용해야 할 때 적합
for (let i=0; i<arr.length; i++) {
  let elem = arr[i];
  console.log(elem);
}

// 인덱스가 필요없고 값만 필요한 경우의 for...of 루프 사용 예시
// 배열의 값만 순회할 때 사용하면 코드가 더 간결해짐
for (let elem of arr) {
  console.log(elem);
}

// for...in 루프를 사용한 배열 순회 (배열의 속성들을 순회)
// 주의: 배열에서는 일반적으로 for...in 대신 for...of를 사용하는 것이 좋습니다
// for...in은 배열의 모든 열거 가능한 속성을 순회하므로 예상치 못한 결과가 발생할 수 있음
for (let prop in arr) {
  console.log(prop, arr[prop]);
}

