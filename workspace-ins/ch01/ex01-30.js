/*
기본 함수(Basic Function)
- 함수는 특정 작업을 수행하는 코드의 집합
- 코드의 재사용성과 유지보수성을 높여줌
*/

// console.log를 사용한 반복적인 코드 - 함수 사용 전
console.log('안녕 Function!!!');
console.log('안녕 Function!!!');
console.log('안녕 Function!!!');

// 함수 선언부
// function 키워드를 사용하여 sayHello라는 이름의 함수를 정의
function sayHello() {
  console.log('Hello Function!!!');
}

// 함수 호출부
// 정의된 함수를 호출하여 실행
sayHello();
sayHello();
sayHello();

// 반복문을 사용한 함수 호출
// for 루프를 사용하여 함수를 100번 반복 실행
for(let i=0; i<100; i++){
  sayHello();
}