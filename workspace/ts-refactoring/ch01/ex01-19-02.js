"use strict";
(() => {
    /*
    if-else문을 사용하여 학점을 출력하세요.
    */
    const score = 70;
    // score가 90점 이상 100점 이하일 때 "A"를 출력
    // score가 80점 이상 90점 미만일 때 "B"를 출력
    // score가 70점 이상 80점 미만일 때 "C"를 출력
    // score가 60점 이상 70점 미만일 때 "D"를 출력
    // score가 60점 미만일 때 "F"를 출력
    if (90 <= score && score <= 100) {
        console.log("A");
    }
    else if (80 <= score) {
        console.log("B");
    }
    else if (70 <= score) {
        console.log("C");
    }
    else if (60 <= score) {
        console.log("D");
    }
    else {
        console.log("F");
    }
    switch (parseInt(score / 10)) {
        case 10: // case 9랑 동일할 때 요렇게 사용 가능
        case 9:
            grade = "A";
            break;
        case 8:
            grade = "B";
            break;
        case 7:
            grade = "C";
            break;
        case 6:
            grade = "D";
            break;
        default:
            grade = "F";
            break;
    }
    console.log(grade);
})();
