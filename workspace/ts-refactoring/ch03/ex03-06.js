"use strict";
(() => {
    /*
     * 클래스 정의와 상속
     * ex03-05.js 복사
     */
    /**
     * 고등학교 성적관리 생성자 함수(총점과 평균 계산)
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     */
    class HighSchool {
        constructor(kor, eng) {
            this.kor = kor;
            this.eng = eng;
        }
        sum() {
            return this.kor + this.eng; // 총점 반환
        }
        avg() {
            return Math.round(this.sum() / 2); // 평균 반환
        }
    }
    const s1 = new HighSchool(100, 91);
    console.log(s1.sum());
    console.log(s1.avg());
    /**
     * 대학교 성적관리 생성자 함수(총점, 평균과 학점 계산)
     * @param {number} kor 국어 점수
     * @param {number} eng 영어 점수
     */
    class College extends HighSchool {
        constructor(kor, eng) {
            // 속성을 더 추가할거면 constructor 안에 넣고, 그냥 있던 속성 가지고 할거면 생략 가능
            super(kor, eng); // 부모 생성자 호출(:HighSchool)
        }
        grade() {
            if (this.avg() >= 90)
                return "A";
            else if (this.avg() >= 80)
                return "B";
            else if (this.avg() >= 70)
                return "C";
            else if (this.avg() >= 60)
                return "D";
            else
                return "F";
        }
    }
    const c1 = new College(80, 99);
    console.log(c1.sum());
    console.log(c1.avg());
    console.log(c1.grade());
    console.log(College.prototype);
})();
