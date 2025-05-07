"use strict";
(() => {
    /*
    대입 연산자 =, +=, -=, *=, /=, %=, **=
    */
    var age = 20;
    var year = 3 + 2; // 5
    console.log(age, year);
    age = age + year;
    console.log(age, year);
    age += year;
    console.log(age, year);
})();
