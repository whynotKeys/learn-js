/*
첫날에 쌀을 한 톨 받습니다.
둘째 날에 쌀을 두 톨 받습니다.
셋째 날에 쌀을 네 톨 받습니다.
매일 전날의 두 배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만개 모을 수 있을까?
*/
let day = 1;
let count = 1;
let sum = 0;

/* 내가 짠 거 */
while (1) {
  sum += count;

  count = 2 ** day;
  if (sum >= 10000000) {
    console.log(`${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을 수 있겠군.`);
    break;
  }
  day++;
}

/* 강사님이 짜신 거 */
day = 1;
count = 1;
sum = 0;

while (sum < 1000_0000) {
  sum += count;
  day++;
  count = count * 2;
}

day--;
console.log(`${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을 수 있겠군.`);

//----------------------------------------------------------------------
// 30일동안 몇 개의 쌀알을 모을 수 있을까?

day = 1;
count = 1;
sum = 0;

while (day <= 30) {
  count = 2 ** (day - 1);
  sum += count;
  day++;
}

console.log(`30일동안 모으니까 쌀알이 ${sum}개 되었다!`);

/* 강사님이 짜신 거 */

day = 1;
count = 1;
sum = 0;
while (day <= 30) {
  sum += count;
  day++;
  count = count * 2;
}

console.log(`30일동안 모으니까 쌀알이 ${sum}개 되었다!`);
