/*
Call by Value와 Call by Reference 차이
*/

/**
 * 2개의 인자값을 받아서 각각 10을 더하여 반환해주는 함수
 * @returns {} 숫자값
 */
function add10(data1, data2) {
  data1 += 10;
  data2[0] += 10;
  console.log(`함수 내부 // d1: ${data1}, d2: ${data2[0]}`); // 90 90
}

let d1 = 80; // number
let d2 = [80]; // array(object)

console.log(`함수 호출 이전 // d1: ${d1},  d2: ${d2[0]}`); // 80 80
add10(d1, d2);

console.log(`함수 호출 이후 // d1: ${d1},  d2: ${d2[0]}`); // 80 90
