/*
반복문 - break, continue
*/

// n ~ m 까지의 정수중에서 가장 작은 짝수를 찾아서 출력하세요.
// n < m

const n = 1;
const m = 10;

for (let i = n; i <= m; i++) {
  //짝수확인
  if (i % 2 === 0) {
    console.log(i + "는 짝수입니다.");
    break;
  }
}

// n부터 m까지 홀수만 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log('홀수', i);
  }
}

// n부터 m까지 홀수와 짝수를 구분해서 출력하세요.
for (let i = n; i <= m; i++) {
  if (i % 2 === 1) {
    console.log('홀수', i);
    continue;
  }

  console.log('짝수', i);
  // 굉장히 많고
  // 복잡한
  // 코드가 
  // 있을 수 
  // 있습니다.
}