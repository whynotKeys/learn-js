(() => {
  /*
  배열의 모든 요소 읽기 1 - for 루프, for...of, for...in
  */
  
  const arr = [1, 2, 3, 4, 5];
  
  // 배열의 모든 요소 출력(for)
  console.log("for 이용해서 모든 요소 출력");
  for (let i = 0; i < arr.length; i++) {
    // i=0, i=1, i=2일 때 for문 실행 됨
    const elem = arr[i]; // arr[0], arr[1], arr[2]
    // console.log(i, elem);
  }
  
  // 배열 내 모든 요소의 합계, 홀수의 합계, 짝수의 합계를 출력
  console.log("배열 내 모든 요소의 합계, 홀수의 합계, 짝수의 합계를 출력");
  
  let sum = 0; // 전체 합계
  let oddSum = 0; // 홀수 합계
  let evenSum = 0; // 짝수 합계
  
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (arr[i] % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  console.log("전체 합계 :", sum);
  console.log("홀수 합계 :", oddSum);
  console.log("짝수 합계 :", evenSum);
  
  // for
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
  // for...of : 인덱스틑 사용하지 않고 배열 요소의 값만 꺼내서 사용할 때
  for (let elem of arr) {
    console.log(elem);
  }
  //for...in: 인덱스를 사용하는 경우 주로 사용 // 객체에서 주로 사용
  for (let prop in arr) {
    console.log(prop);
    console.log(arr[prop]);
  }
  
})();
