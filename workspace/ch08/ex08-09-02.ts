// 비동기 함수 - await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-09.ts 복사

function p1() {
  // Promise
  return new Promise((resolve, reject) => {
    resolve("p1 결과");
  });
}
async function a1() {  // async를 붙여서 그냥 return하면 promise - resolve 리턴한 것처럼 됨 (= 비동기함수를 동기함수처럼 간단히 코딩 가능)
  return "a1 결과";
}

function p2() {
  return new Promise((resolve, reject) => {
    reject("p2 에러 (reject)");
  });
}
async function a2() {  // async를 붙여서 throw 하면 promise - reject 리턴한 것처럼 됨
  throw "a2 에러";
}

async function test() {
  try {
    const a1Result = a1();
    console.log(a1Result);

    const p1Result = p1();
    console.log(p1Result);

    const a2Result = a2();
    console.log(a2Result);

    const p2Result = p2();
    console.log(p2Result);
  } catch (err) {
    console.log('실패', err);
  }
}

console.log("1. 작업 시작.");
test();
console.log("2. 작업 종료. 이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미");

// 모듈에서는 top 레벨에서 await 사용 가능(~ES2022)
const a1Result = await a1();
console.log(a1Result);

export {}; // 빈 export 를 추가해서 TS가 이 파일을 모듈로 인식하도록 함
