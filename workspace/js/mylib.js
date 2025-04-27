// 다른 라이브러리와 충돌을 막고 내가 만든 함수라는 걸 표시하는 프리픽스
// lodash는 _.~ # 이런 거
const mylib = {}; // 빈 객체 생성

// isPrime(5); 메모이제이션 적용X
// isPrime = isPrime.memoize();
// isPrime(5); 메모이제이션 된 결과 반환
// 일급객체, this, arguments, apply, prototype, closure,
Function.prototype.memoize = function () {
  const fn = this; // isPrime
  // 함수 리턴 : 고차 함수
  return function () {
    return fn.memo.apply(fn, arguments); // = isPrime.memo(5)
  };
};

// 함수에 메모이제이션 기능 추가
Function.prototype.memo = function (key) {
  this._cache = this._cache || {}; // 캐시 객체 초기화(있으면 사용, 없으면 생성)

  if (this._cache[key] !== undefined) {
    // key에 대해서 계산이 끝나고 캐싱된 경우
    return this._cache[key]; // 캐시된 값 반환
  } else {
    return (this._cache[key] = this(key)); // isPrime 함수를 호출해서 결과를 받은 후 캐시에 저장
  }
};

// Child가 Parent를 상속받도록 하는 함수
mylib.inherit = function inherit(Parent, Child) {
  // 임시 인스턴스인 F를 생성해서 Parent의 prototype을 참조하도록 함
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  // Object.create() : 지정한 prototype 객체를 참조하는 인스턴스 생성
  // 위 세 줄과 아래 한 줄이 동일한 효과!
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child; // 생성자 함수 재지정
};
