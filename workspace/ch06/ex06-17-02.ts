// echo 함수 - 제네릭 함수
// ex06-17.ts 복사

(() => {
  // T가 아님 아무 문자나 사용 가능하지만 관례적으로 type의 첫 글자인 T를 많이 사용함
  function echo<T>(msg: T): T {
    return msg;
  }

  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  console.log(echo(true));

  function echor<T, R>(result: T): R {
    let value: any;
    if (result === 100) {
      value = "백점";
    } else if (result === 0) {
      value = "빵점";
    } else {
      value = "몰라";
    }

    return value as R;
  }
  console.log(echor<number, string>(100));

  console.log(echo<string | number>(100)); // 유니온 타입도 됨

  type mytype = number | string | boolean;
  console.log(echo<mytype>(false)); // 타입 별칭도 됨
})();
