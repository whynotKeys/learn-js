(() => {
  /* 
  if-else if 문 사용
  
  1. 정보처리 기사 필기 시험의 과목은 소프트웨어 설계, 소프트웨어 개발, 데이터베이스 구축, 프로그래밍 언어 활용, 정보 시스템 구축 관리 입니다.
  다섯 과목의 점수가 다음과 같을 때 총점과 평균을 출력하는 프로그램을 작성하세요.
  출력 결과:
  총점: 303
  평균: 60.6
  
  2. 최고점과 최저점을 추가로 출력하세요
  출력 결과:
  총점: 303
  평균: 60.6
  최고점: 80
  최저점: 48
  
  3. 과목당 40점 이상, 전과목 평균 60점 이상이면 합격입니다.
  합격 여부를 추가로 출력하세요.
  출력 결과:
  총점: 303
  평균: 60.6
  최고점: 80
  최저점: 48
  축하합니다. 합격입니다.
  
  4. 만약 불합격일 경우 불합격 사유를 추가로 출력하세요.
  출력 결과 1: softwareDesign = 40일 경우
  총점: 295
  평균: 59
  최고점: 80
  최저점: 40
  아쉽지만 불합격입니다. 사유: 평균 60점 미달
  
  출력 결과 2: softwareDesign = 30일 경우;
  총점: 285
  평균: 57
  최고점: 80
  최저점: 30
  아쉽지만 불합격입니다. 사유: 평균 60점 미달(57점)
  아쉽지만 불합격입니다. 사유: 과락 40점 미달(30점)
  */
  
  const softwareDesign = 70; // 1. 소프트웨어 설계
  const softwareDevelopment = 80; // 2. 소프트웨어 개발
  const databaseSetup = 50; // 3. 데이터베이스 구축
  const programmingUsage = 70; // 4. 프로그래밍 언어 활용
  const systemManagement = 55; // 5. 정보 시스템 구축 관리
  
  // 1. 총합과 평균
  let sum;
  let average;
  
  sum = softwareDesign + softwareDevelopment + databaseSetup + programmingUsage + systemManagement;
  average = sum / 5;
  
  // 2. 최고점 및 최저점
  let max = 0;
  let min = 0;
  // 최고점
  if (
    softwareDesign > softwareDevelopment &&
    softwareDesign > databaseSetup &&
    softwareDesign > programmingUsage &&
    softwareDesign > systemManagement
  ) {
    max = softwareDesign;
  } else if (
    softwareDevelopment > softwareDesign &&
    softwareDevelopment > databaseSetup &&
    softwareDevelopment > programmingUsage &&
    softwareDevelopment > systemManagement
  ) {
    max = softwareDevelopment;
  } else if (
    databaseSetup > softwareDesign &&
    databaseSetup > softwareDevelopment &&
    databaseSetup > programmingUsage &&
    databaseSetup > systemManagement
  ) {
    max = databaseSetup;
  } else if (
    programmingUsage > softwareDesign &&
    programmingUsage > softwareDevelopment &&
    programmingUsage > databaseSetup &&
    programmingUsage > systemManagement
  ) {
    max = programmingUsage;
  } else {
    max = systemManagement;
  }
  // 최저점
  if (
    softwareDesign < softwareDevelopment &&
    softwareDesign < databaseSetup &&
    softwareDesign < programmingUsage &&
    softwareDesign < systemManagement
  ) {
    min = softwareDesign;
  } else if (
    softwareDevelopment < softwareDesign &&
    softwareDevelopment < databaseSetup &&
    softwareDevelopment < programmingUsage &&
    softwareDevelopment < systemManagement
  ) {
    min = softwareDevelopment;
  } else if (
    databaseSetup < softwareDesign &&
    databaseSetup < softwareDevelopment &&
    databaseSetup < programmingUsage &&
    databaseSetup < systemManagement
  ) {
    min = databaseSetup;
  } else if (
    programmingUsage < softwareDesign &&
    programmingUsage < softwareDevelopment &&
    programmingUsage < databaseSetup &&
    programmingUsage < systemManagement
  ) {
    min = programmingUsage;
  } else {
    min = systemManagement;
  }
  
  // max = Math.max(softwareDesign, softwareDevelopment, databaseSetup, programmingUsage, systemManagement);
  // min = Math.min(softwareDesign, softwareDevelopment, databaseSetup, programmingUsage, systemManagement);
  
  // 3. 합격 여부 / 4. 불합격 사유 추가
  let result;
  
  if (min < 40 && average < 60) {
    result = `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${min}점)\n아쉽지만 불합격입니다. 사유: 평균 60점 미달(${average}점)\n공부하신 거 맞나요?`;
  } else if (min < 40) {
    result = `아쉽지만 불합격입니다. 사유: 과락 40점 미달(${min}점)`;
  } else if (average < 60) {
    result = `아쉽지만 불합격입니다. 사유: 평균 60점 미달(${average}점)`;
  } else {
    result = "축하합니다. 합격입니다.";
  }
  
  let testTaker;
  // testTaker = "likelion 13기 프론트엔드 부트캠프 참가자";
  
  if (testTaker === "likelion 13기 프론트엔드 부트캠프 참가자") {
    result = "어? likelion 13기 프론트엔드 부트캠프 참가자시군요 합격 그냥 드립니다!!";
  }
  
  //결과 출력
  console.log(`총점: ${sum}
  평균: ${average}
  최고점: ${max}
  최저점: ${min}
  ${result}`);
  
})();
