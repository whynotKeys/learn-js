(() => {
  /**
   * 국어, 영어, 수학 점수를 받아서 총점과 평균을 계산할 수 있는 객체를 생성 : 생성자 함수
   * @param {number} kor 국어 점수
   * @param {number} eng 영어 점수
   * @param {number} math 수학 점수
   */
  const Score = function (kor, eng, math) {
    this.kor = kor; // 국어 점수
    this.eng = eng; // 영어 점수
    this.math = math; // 수학 점수
    // TODO Closure : (원래 함수 끝나면 사라지는) 실행이 완료된 함수의 지역변수가 참조 가능한 상태로 유지되는 현상
    this.sum = function () {
      return this.kor + this.eng + this.math; // 총점
    };
    this.avg = function () {
      return (this.kor + this.eng + this.math) / 3; // 평균
    };
  };
  
  // 바로핑 : 100, 90, 80
  // 라라핑 : 90, 80, 60
  const baro = new Score(100, 90, 80);
  const rara = new Score(90, 80, 60);
  
  // 두사람의 총점과 평균을 출력
  console.log(baro.sum(), baro.avg()); // 270 , 90
  console.log(rara.sum(), rara.avg()); // 230, 76.666..
  
  // 전원 수학 점수를 10점 올린 후 총점과 평균을 출력
  baro.math += 10;
  rara.math += 10;
  
  console.log(baro.sum(), baro.avg()); // 280, 93.333..
  console.log(rara.sum(), rara.avg()); // 240, 80
  
})();
