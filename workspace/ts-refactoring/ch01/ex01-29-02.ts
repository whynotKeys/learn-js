(() => {
  /*
  2차원 배열
  FEBC 수강생의 이름을 저장하는 배열 작성
  */
  
  // const febcStudents = [
  //   ["해리", "론", "허마이오니", "네빌", "덤블도어", "맥고나걸"],
  //   ["말포이", "볼디", "세베루스", "벨라트릭스", "펜리르", "내기니"],
  // ];
  // const bebcStudents = [
  //   ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란"],
  //   ["피존투", "또가스", "따라큐", "메타몽", "데인차", "포트데스"],
  // ];
  // const aosbcStudents = [
  //   ["우디", "버즈", "슬링키", "알린", "미스터포테이토", "미세스포테이토"],
  //   ["미피", "키티", "한교동", "쿠로미", "쿼카", "포차코"],
  // ];
  
  const likelionStudents = [
    ["해리", "론", "허마이오니", "네빌", "덤블도어", "맥고나걸"],
    ["피카츄", "라이츄", "파이리", "꼬부기", "버터풀", "야도란", "피존투"],
    ["미피", "키티", "한교동", "쿠로미", "쿼카", "포차코"],
  ];
  
  let isInHarry = false;
  let isInRon = false;
  
  // 각 캠프의 수강인원 확인
  for (let i = 0; i < likelionStudents.length; i++) {
    const campStudents = likelionStudents[i];
    console.log("수강생", campStudents.length, "명");
  
    // 특정 수강생 유무 확인
    // 수강생 유무 확인 : 내가 짠 밀고 코드
    // let result = "";
    // for (let k = 0; k < campStudents.length; k++) {
    //   if (campStudents[k] != "해리") {
    //     result = `${i}캠프에 해리가 없습니다.`;
    //   } else {
    //     console.log(`${i}캠프에서 해리를 찾았다!!! 아바다...!`);
    //     break;
    //   }
    // }
    // console.log(result);
  
    // 수강생 유무 확인 : 강사님이 짜신 코드
    for (let k = 0; k < campStudents.length; k++) {
      {
        if (campStudents[k] === "해리") {
          isInHarry = true;
          break;
        }
      }
    }
  }
  if (isInHarry) {
    console.log("이 안에 해리가 있다!!!!");
  } else {
    console.log("이 안에 해리가 없다");
  }
  
  // 수강생 유무 확인 : 배열 메소드 사용
  isInRon = likelionStudents[0].includes("론");
  if (isInRon) {
    console.log("론 있음");
  } else {
    console.log("론 없음");
  }
  
  // 전체 수강생 수 확인
  let sum = 0;
  for (let i = 0; i < likelionStudents.length; i++) {
    const campStudents = likelionStudents[i];
    sum += campStudents.length;
  }
  console.log("전체 수강생", sum, "명");
  
  // febc 모든 수강생 이름 출력
  
})();
