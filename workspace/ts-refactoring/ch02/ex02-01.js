"use strict";
(() => {
    /*
    * 자바스크립트의 함수는 일급 객체이다.
      - 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
      - 함수의 인자로 전달될 수 있다.
      - 함수의 결과 값으로 반환될 수 있다.
      - 리터럴로 생성될 수 있다.
      - 동적으로 생성된 프로퍼티를 가질 수 있다.
    */
    var num = 100; // number
    var str = "hello"; // string
    var obj = {}; // object
    var arr = [num, str]; // object(array)
    // 함수를 변수에 할당
    const foo = function () {
        console.log(this);
        return "나는 foo인간입늬다.";
    };
    // 함수를 배열의 요소로 할당
    arr.push(obj); // [100, 'hello', {}]
    arr.push(foo); // [100, 'hello', {}, function(){}]
    // 함수를 객체의 속성으로 할당(메서드)
    obj.bar = foo;
    obj.baz = function () {
        return "나는 baz인간입늬다.";
    };
    // 실행
    // console.log(num, str, obj, arr); // 100 'hello' {} [100, 'hello', {}, function(){}]
    console.log(foo(), arr[3](), obj.bar(), arr[2].bar(), obj.baz());
    // foo() this는 window 객체
    // arr[3]() this는 arr[3]
    // obj.bar() this는 obj
    // arr[2].bar() this는 obj
    // obj.baz() this는 obj
})();
