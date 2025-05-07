(() => {
  console.log(Math.min(10, 100)); // 10
  console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
  console.log(Math.min(100, 20, 60, 50, 70)); // 20
  
  // 지정한 배열의 요소 중 최소값을 반환 : 내가 작성한 코드
  // function smallest(nums) {
  //   const type = typeof nums;
  //   if (type === "object") {
  //     return Math.min(...nums);
  //   } else {
  //     return Math.min(...arguments);
  //   }
  // }
  
  function smallest(nums) {
    // return Math.min.apply(this, nums); // apply 사용
  
    const min = Math.min(...nums); // spread 문법(...) = 전개 구문 사용
    return min;
  }
  
  console.log(smallest([10, 100])); // 10
  console.log(smallest([200, 100, 50, 60, 80, 30])); //30
  console.log(smallest([100, 20, 60, 50, 70])); // 20
  
})();
