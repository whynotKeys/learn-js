const mylib = {};

// isPrime(5); 메모이제이션 안됨
// isPrime = isPrime.memoize();
// isPrime(5); 메모이제이션 된 결과 반환
// 일급객체, this, arguments, apply, prototype, closure
Function.prototype.memoize = function(){
  const fn = this; // isPrime
  return function(){
    return fn.memo.apply(fn, arguments); // isPrime.memo(5)
  };
};

// 함수에 메모이제이션 기능 추가
Function.prototype.memo = function(key){ // this = isPrime
  // 캐시를 위한 코드
  this._cache = this._cache || {};
  if(this._cache[key] !== undefined){ // key에 대해서 계산이 끝나고 캐시된 경우
    return this._cache[key];
  }else{
    return this._cache[key] = this(key); // isPrime 함수를 호출해서 결과를 받은 후 캐시에 저장하고 리턴
  }
};

// Child가 Parent를 상속 받는다.
mylib.inherite = function(Parent, Child){
  // const F = new Function();
  // F.prototype = Parent.prototype;
  // Child.prototype = new F();

  // Object.create(): 지정한 prototype 객체를 참조하는 인스턴스 생성
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}