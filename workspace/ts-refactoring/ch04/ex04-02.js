"use strict";
(() => {
    // count 속성과 ride(), getCount() 메서드 작성
    const Counter = function () {
        // this.count = 0;
        // this.getCount = function () { // 방문자 수를 반환하는 메서드
        //   return this.count;
        // };
        // this.ride = function () { // count를 증가시키는 메서드
        //   if(this.count < 40){
        //     this.count++ ;
        //   } else{
        //     console.log("정원 초과! 정원은 40명입니다.");
        //   }
        // };
        let count = 0; // 외부에서 접근할 수 없도록 내부 지역변수로 만듦
        this.getCount = function () {
            return count;
        };
        this.ride = function () {
            if (count < 40) {
                count++;
            }
            else {
                console.log("정원 초과! 정원은 40명입니다.");
            }
        };
    };
    const c = new Counter();
    c.ride();
    c.ride();
    // for (let i = 0; i < 40; i++){
    //   c.ride()
    // }
    // 직접 count를 증가시킴 -> Counter.ride() 안에 있는 안전장치가 작동하지 않음 : 오류 발생 가능성 상승
    c.count += 40;
    console.log("전체 탑승자", c.getCount());
})();
