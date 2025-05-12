// 비동기 함수 - async/await 사용
// 비동기 함수의 작업이 완료된 후 실행할 코드가 있으면 async/await 사용
// ex08-08.ts 복사

(()=>{
  function f1(){ // 비동기 함수
    return new Promise<string>((resolve, reject) => {
      console.log('\t\t3. f1 호출됨.');
      const delay = Math.floor(Math.random() * 1000 * 10);
      console.log(`\t\t4. ${delay}ms 동안 작업중...`);

      setTimeout(() => {
        console.log('\t\t f1 작업 완료.', delay);
        resolve('f1 작업 결과!!!');
      }, delay);

      console.log('\t\t5. f1 리턴됨.');
    });
  }

  async function test(){ // 비동기
    console.log('\t2. test 호출됨.');

    const result = await f1();
    console.log('\t8. f1 작업이 완료된 후에 호출.', result);
    
    const result2 = await f1();
    console.log('\t8. f1 작업이 완료된 후에 호출.', result2);

    console.log('\t6. test 리턴됨');
  }

  console.log('1. 작업 시작.');
  test();
  console.log('7. 작업 종료.');
})();