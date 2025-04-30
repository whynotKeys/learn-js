// 함수에 타입 지정

(()=>{
  function getCount(count: number): string {
    // return count; // 타입 에러
    return 'Count: ' + count;
  }

  // let result = getCount('20'); // 타입 에러
  let result/* : string  */= getCount(20);

  console.log(result);
})();