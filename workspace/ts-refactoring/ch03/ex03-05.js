"use strict";
(() => {
    /*
    * 프로토타입 체인을 이용한 상속 기능 구현(중계 함수 추가)
    * ex03-04.js 복사
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
    // College가 Highschool을 상속 => 이 방법을 사용하면 불필요한 속성을 제거하고 상속 가능
    // const F = new Function();
    // F.prototype = HighSchool.prototype; // 상속
    // College.prototype = new F();
    // College.prototype.constructor = College; // 생성자 함수 재지정
    // js/mylib.js로 이동
    // Child가 Parent를 상속받도록 하는 함수 생성해서 사용
    // function inherit(Parent, Child) {
    //   // 임시 인스턴스인 F를 생성해서 Parent의 prototype을 참조하도록 함
    //   // const F = new Function();
    //   // F.prototype = Parent.prototype;
    //   // Child.prototype = new F();
    //   // Object.create() : 지정한 prototype 객체를 참조하는 인스턴스 생성
    //   // 위 세 줄과 아래 한 줄이 동일한 효과!
    //   Child.prototype = Object.create(Parent.prototype);
    //   Child.prototype.constructor = Child; // 생성자 함수 재지정
    // }
    mylib.inherit(HighSchool, College);
    College.prototype.grade = function () {
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
    };
    const c1 = new College(80, 99);
    console.log(c1.sum());
    console.log(c1.avg());
    console.log(c1.grade());
    console.log(College.prototype);
})();
