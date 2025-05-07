"use strict";
(() => {
    /*
    변수 선언
    */
    var a;
    var b, c; // 권장X
    var d = 10;
    var e = 100, f = 200; // 권장X, 한 줄에 하나씩 권장
    var user = "멜로핑";
    var user2 = "눈꽃핑";
    var message = '아자핑이 "안녕하세요."라고 말했다.';
    var message = "하츄핑이 '안녕하세요.'라고 말했다.";
    var message = '피곤핑이 "피곤해."라고 말했다.'; // 이스케이프 문자(\)
    var message = "몰라핑이 \n모른다고 말\t했다."; // 줄바꿈문자(\n), 들여쓰기tab문자(\t)
    var 변수1 = "좋아핑";
    var 이름_변수 = "싫어핑";
    var $money = 4;
    var $4 = 4;
    var pi = 3.14;
    var _ = 200;
    var $ = 4;
    // 2단어 합쳤을 경우 camel case 사용. kebab 아예 에러 남
    // var user-name = '안돼핑'; // 안됨
    var userName = "낙타핑";
    var userAge = 30;
    var userGender = "여성";
    var userEmail = "ping@gmail.com";
    // 변수 재정의
    console.log(user, message);
    console.log("이메일 변경 전: ", userEmail);
    userEmail = "ping@naver.com";
    console.log("이메일 변경 후: ", userEmail);
})();
