/*
국어, 영어, 수학 점수의 총점과 평균을 출력하는 프로그램
*/

// 객체로 만들기
const score = {
  // 과목별 점수 속성 정의
  kor: 100,  // 국어 점수
  eng: 90,   // 영어 점수
  math: 85,  // 수학 점수
  
  // 총점을 계산하는 메서드
  sum: function(){ 
    // TODO this = score, 메서드 내부에서 this가 사용될때 this는 메서드를 가진 객체를 가리킴
    // 객체의 메서드가 자신의 속성을 접근할때 this 사용
    // return this.kor + this.eng + this.math;  // this를 사용한 방법
    return score.kor + score.eng + score.math;  // 객체 이름을 직접 사용한 방법
  },
  
  // 평균을 계산하는 메서드
  avg: function(){ 
    return this.sum() / 3;  // 총점을 3으로 나누어 평균 계산
  }
};

// 점수 출력
console.log(score.kor, score.eng, score['math']);  // 각 과목 점수 출력
console.log('총점', score.sum());  // 총점 출력
console.log('평균', score.avg());  // 평균 출력