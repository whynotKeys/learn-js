/*
while 문 사용

첫날에 쌀을 한톨 받습니다.
둘째날 쌀을 두톨 받습니다.
세째날 쌀을 네톨 받습니다.
매일 전날의 두배가 되는 쌀알을 받아서 모으면 몇일을 모아야 쌀알을 천만톨 모을수 있을까?
*/

let day = 0; // 날짜
let count = 1; // 받을 쌀알 수
let sum = 0; // 누적된 쌀알 수

while (sum < 1000_0000) {
  day++;
  sum += count;
  count = count * 2;
}

console.log(`${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을수 있겠군.`);

// 30일 동안 몇개의 쌀알을 모을 수 있는가?
day = 0; // 날짜
count = 1; // 받을 쌀알 수
sum = 0; // 누적된 쌀알 수

while (day < 30) {
  day++;
  sum += count;
  count = count * 2;
}

console.log(`${day}일 동안 받았더니 쌀알이 ${sum}개 되었다. 내일은 ${count}개 받을수 있겠군.`);
