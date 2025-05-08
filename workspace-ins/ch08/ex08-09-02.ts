// 비동기 함수 - await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-09.ts 복사


function p1(){ // Promise
  return new Promise((resolve, reject) => {
    resolve('p1 결과');
  });
}
async function a1(){ // 비동기 함수이지만 동기 함수처럼 개발 가능
  return 'a1 결과';
}

function p2(){
  return new Promise((resolve, reject) => {
    reject('p2 에러');
  });
}
async function a2(){
  throw 'a2 에러';
}

async function test(){
  try {
    const a1Result = await a1();
    console.log(a1Result);

    const p1Result = await p1();
    console.log(p1Result);

    const a2Result = await a2();
    console.log(a2Result);

    const p2Result = await p2();
    console.log(p2Result);
  } catch(err) {
    console.log('실패', err);
  }

}

console.log('1. 작업 시작.');
await test();
console.log('2. 작업 종료. 이 메세지가 f1 작업 완료 보다 먼저 나오면 비동기로 호출된다는 의미');

// 모듈에서는 탑레벨에서 await 사용 가능(ES2022)
const a1Result = await a1();
console.log(a1Result);

export {} // 빈 export를 추가해서 TS에게 모듈로 인식 시킴