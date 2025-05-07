"use strict";
(() => {
    /*
    for문
    */
    /*
    *
    **
    ***
    ****
    *****
    출력하기
    */
    const lines = 10;
    let character = "*";
    console.log("☆");
    for (let i = 0; i < lines; i++) {
        let star = "";
        for (let k = 0; k <= i; k++) {
            star += character;
        }
        console.log(star);
    }
    /*
    *****
    ****
    ***
    **
    *
    출력하기
    */
    for (let i = lines; i >= 1; i--) {
        let star = "";
        for (let k = 0; k < i; k++) {
            star += character;
        }
        console.log(star);
    }
    /*
        *
       **
      ***
     ****
    *****
    출력하기
    */
    for (let i = 0; i < lines; i++) {
        let space = "";
        let star = "";
        // 공백용 for문
        for (let k = 0; k < lines - i - 1; k++) {
            space += " ";
        }
        // star용 for문
        for (let k = 0; k <= i; k++) {
            star += character;
        }
        console.log(space + star);
    }
    /*
    *****
     ****
      ***
       **
        *
    출력하기
    */
    for (let i = 0; i < lines; i++) {
        let space = "";
        let star = "";
        // 공백용 for문
        for (let k = 0; k <= i; k++) {
            space += " ";
        }
        // star용 for문
        for (let k = 0; k < lines - i - 1; k++) {
            star += character;
        }
        console.log(space + star);
    }
})();
