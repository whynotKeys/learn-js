"use strict";
(() => {
    /*
    do-while 구문
    
    do {
    
    } while (조건);
    */
    let i = 1;
    let sum = 0;
    do {
        sum += i;
        i++;
    } while (i <= 10);
    console.log(sum);
})();
