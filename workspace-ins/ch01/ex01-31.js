/*
매개변수를 가진 함수

함수는 코드의 재사용을 위해 만들어진 코드 블록입니다.
매개변수를 사용하면 함수 호출 시 다양한 값을 전달하여 활용할 수 있습니다.
*/

/**
 * 티니핑의 이름을 전달 받아서 "Hello"와 함께 인사말을 출력하는 함수
 * @param {string} pingName - 인사할 티니핑의 이름
 */
function sayHello(pingName) {
  console.log('Hello ' + pingName);
}

// 서로 다른 티니핑 이름으로 함수를 호출
sayHello('하츄핑');
sayHello('깡총핑');
sayHello('초롱핑');
