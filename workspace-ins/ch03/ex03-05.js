/*
* 프로토타입 체인을 이용한 상속 기능 구현(중계 함수 추가)
* ex03-04.js 복사
*/

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng){
  this.kor = kor;
  this.eng = eng;
}
HighSchool.prototype.sum = function(){
  return this.kor + this.eng;
};
HighSchool.prototype.avg = function(){
  // 소수 첫째자리에서 반올림한다.
  return Math.round(this.sum() / 2);
};

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng){
  HighSchool.call(this, kor, eng);
}

// js/mylib.js에 정의
mylib.inherite(HighSchool, College);

College.prototype.grade = function(){
  let level = 'F';
  const avg = this.avg();
  if(avg >= 90){
    level = 'A';
  }else if(avg >= 80){
    level = 'B';
  }else if(avg >= 70){
    level = 'C';
  }else if(avg >= 60){
    level = 'D';
  }
  return level;
};

const c1 = new College(80, 99);
console.log(c1.sum()); // 179
console.log(c1.avg()); // 89.5
console.log(c1.grade()); // B

console.log(College.prototype);