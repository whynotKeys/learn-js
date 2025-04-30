// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(()=>{

  // T 뿐만 아니라 식별자 규칙을 따르는 아무 문자나 사용 가능하지만 관례적으로 Type의 첫글자인 T를 사용
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>('hello'));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));
})();
