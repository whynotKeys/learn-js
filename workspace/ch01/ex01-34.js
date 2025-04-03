/*
반환값이 있는 함수 - 토스터
*/

function toaster(time, bread) {
  return time + "초 동안 구워진 " + bread;
}
let toast1 = toaster(40, "우유 식빵");
let toast2 = toaster(60, "호밀 식빵");
let bagel = toaster(80, "쫀득베이글");

console.log(toast1);
console.log(toast2);
console.log(bagel);
