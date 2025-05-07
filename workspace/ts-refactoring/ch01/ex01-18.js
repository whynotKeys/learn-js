"use strict";
(() => {
    /*
    if-else if문
    
    if (조건식1){
    조건식1이 참일때 실행할 코드;
    조건식1이 참일때 실행할 코드;
    ...
    } else if (조건식2){
    조건식2가 참일때 실행할 코드;
    조건식2가 참일때 실행할 코드;
    ...
    } else if (조건식3){
    조건식3이 참일때 실행할 코드;
    조건식3이 참일때 실행할 코드;
    ...
    } else {
    조건식이 거짓일 때 실행할 코드;
    조건식이 거짓일 때 실행할 코드;
    ...
    }
    */
    const age = 15;
    // age가 20 이상이면 "성인" 출력하고 그렇지 않으면 "미성년자" 출력
    if (age >= 20) {
        console.log("성인");
    }
    else {
        console.log("미성년자");
    }
    const num = 0;
    // num이 양수이면 "양수" 출력하고 그렇지 않으면 "음수" 출력, num이 0이면 "0" 출력
    if (num > 0) {
        console.log("양수");
    }
    else if (num < 0) {
        console.log("음수");
    }
    else {
        console.log(0);
    }
    const password = 1234;
    // password가 1234면 "로그인 성공!" 출력하고 아니면 "로그인 실패!" 출력
    if (password === 1234) {
        console.log("로그인 성공!");
    }
    else {
        console.log("로그인 실패!");
    }
    const num2 = 3;
    // num2가 짝수이면 "짝수" 출력하고 홀수이면 "홀수" 출력
    // 단, num2는 0보다 크다.
    if (num2 % 2 === 0) {
        console.log("짝수");
    }
    else {
        console.log("홀수");
    }
    const num3 = 7;
    // num3가 3의 배수이면 "3의 배수" 출력하고 3의 배수가 아니면 "3의 배수가 아님" 출력
    if (num3 % 3 === 0) {
        console.log("3의 배수");
    }
    else {
        console.log("3의 배수가 아님");
    }
})();
