/*
유사 배열 객체
*/

/**
 * 전달 받는 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {any[]} arr - 배열
 */

function printArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]);
  }
}

const colorArr = ["orange", "yellow", "green"]; // 배열 생성
printArr(colorArr);

/*
 유사배열 객체
  - length 속성
  - 0부터 시작해서 1씩 증가하는 속성 추가
*/
const arr = {
  length: 3,
  0: "orange",
  1: "yellow",
  2: "green",
  /**
   * 맨 끝에 지정한 elem을 추가한다.
   * @param {*} elem - 추가할 요소
   */
  push: function (elem) {
    // 직접 push 메서드를 정의해서 사용
    // this[this.length] = elem; // length 속성에 추가된 요소를 넣는다.
    // this.length++; // length 속성 증가

    // 배열의 push메서드 사용 : push 하려고 새 배열을 하나 만드는 일은 비효율적임..!!
    // var tmpArr = new Array(); // 새로운 배열 생성
    // tmpArr.push.call(this, elem); // call 메서드로 this를 지정해서 push 메서드 사용

    // 배열의 모든 메서드는 배열의 생성자 함수인 Array의 prototype 속성에 정의되어 있음!!
    Array.prototype.push.call(this, elem);
  },
};
arr.push("black"); // 배열이 아니기 때문에 원래 push 불가능하지만 객체 안에 정의해서 가능해짐
arr.push("white");
arr.push("gray");

// arr[3] = "black";
// arr.length++;
// arr.h4 = "black";
printArr(arr);
// console.log(arr);

// 텍스트(문자열)도 유사 배열 객체의 일종
let text = "hihi";
// printArr(text);
// text.push("hello"); // 배열이 아니기 때문에 이건 불가능
