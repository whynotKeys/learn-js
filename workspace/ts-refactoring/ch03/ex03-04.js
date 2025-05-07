/*
 * 프로토타입 체인을 이용한 상속 기능 구현
 */

/**
 * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function HighSchool(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

HighSchool.prototype.sum = function () {
  return this.kor + this.eng; // 총점 반환
};

HighSchool.prototype.avg = function () {
  return this.sum() / 2; // 평균 반환
};

const s1 = new HighSchool(100, 91);
console.log(s1.sum());
console.log(s1.avg());

/**
 * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
 * @param {number} kor 국어 점수
 * @param {number} eng 영어 점수
 */
function College(kor, eng) {
  this.kor = kor;
  this.eng = eng;
}

//College가 Highschool을 상속 받는다.
College.prototype = new HighSchool(); // 상속
College.prototype.constructor = College; // 생성자 함수 재지정

College.prototype.grade = function () {
  if (this.avg() >= 90) return "A";
  else if (this.avg() >= 80) return "B";
  else if (this.avg() >= 70) return "C";
  else if (this.avg() >= 60) return "D";
  else return "F";
};

const c1 = new College(80, 99);
console.log(c1.sum());
console.log(c1.avg());
console.log(c1.grade());

console.log(College.prototype);
