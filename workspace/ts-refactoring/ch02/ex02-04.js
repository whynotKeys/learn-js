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
    // 함수는 동적으로 생성된 프로퍼티를 가질 수 있다.
    function add(x, y) {
        var result = x + y; // 함수 내부에 생성한 지역변수는 함수가 끝나면 사라짐
        return result;
    }
    console.log("log로 찍은 거--------------------");
    console.log(add);
    console.log("dir로 찍은 거--------------------");
    console.dir(add); // 함수의 length는 선언된 매개변수의 개수!
    console.log("--------------------------------");
    console.log(add(10, 20), add(10, 20)); // 함수 호출 결과값을 바로 출력
    const result = add(30, 40); // 변수에 결과값을 할당해서 사용
    console.log(result, result);
    // ▼이렇게도 작동하긴 하지만 쓰지 않음. 지양하는 방식!!!!!
    function addi(x, y) {
        addi.result = x + y; // 함수 내부에 생성한 지역변수는 함수가 끝나면 사라짐
        return addi.result;
    }
    addi(50, 60);
    console.log(addi.result, addi.result);
})();
