(() => {
  /*
  if문을 사용하여 학점을 출력하세요.
  */
  
  const score = 97;
  // score가 90점 이상 100점 이하일 때 "A"를 출력
  if (90 <= score && score <= 100) {
    console.log("A");
  }
  
  // score가 80점 이상 90점 미만일 때 "B"를 출력
  if (80 <= score && score < 90) {
    console.log("B");
  }
  
  // score가 70점 이상 80점 미만일 때 "C"를 출력
  if (70 <= score && score < 80) {
    console.log("C");
  }
  
  // score가 60점 이상 70점 미만일 때 "D"를 출력
  if (60 <= score && score < 70) {
    console.log("D");
  }
  
  // score가 60점 미만일 때 "F"를 출력
  if (score < 60) {
    console.log("F");
  }
  
})();
