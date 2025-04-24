// ex02-15.js 복사해옴

globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체를 가르킴 -> 둘 다 실행 가능!

const getPingName = function () {
  return this.name;
};

/*
const baro = new Object();
baro.name = "바로바로해핑";
baro.age = 9;
baro.getName = getPingName;

const rara = {
  name: "라라핑",
  age: 8,
  getName: getPingName,
};
*/

// 객체를 생성해서 반환하는 함수(생성자 함수) : new 연산자와 함께 사용해야 함
function Ping(name, age) {
  this.age = age;
  this.name = name;
  this.getName = function () {
    return this.name;
  };
}

//new의 동작
// 1. 빈 객체를 참조하는 this 생성
// 2. this를 생성자 함수에 전달
// 3.생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
const baro = new Ping("바로핑", 8);
const rara = new Ping("라라핑", 9);
const copyPing = new Ping("까삐핑", 12);
const rePing = new Ping("다시핑", 87);

baro.age++;
baro.height = 120;

console.log(baro.age, baro.getName(), baro.height); // getName()의 this는 baro
console.log(rara.age, rara.getName()); // getName()의 this는 rara
console.log(copyPing.age, copyPing.getName()); // getName()의 this는 copyPing

console.log(getPingName(), getPingName.call(baro)); // this = window, this = baro
console.log(baro.getName(), baro.getName.apply(rara)); // this = baro, this = rara
console.log(rara.getName(), rara.getName.apply(globalThis)); // this = rara, this = window
