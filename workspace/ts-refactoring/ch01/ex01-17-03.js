"use strict";
(() => {
    /*
    if-else문을 이용하여 사용자와 로그인 상태를 출력하세요.
    
    */
    const isLogin = false;
    const isUser = false;
    const isSeller = false;
    const isAdmin = true;
    // isLogin이 true이면 "로그인 상태" 출력
    // isLogin이 false이면 "로그아웃 상태" 출력
    let status = "";
    if (isLogin) {
        status = "로그인 상태";
    }
    else {
        status = "로그아웃 상태";
    }
    console.log(status);
    // isUser가 true이면 "사용자" 출력
    // isSeller가 true이면 "판매자" 출력
    // isAdmin이 true이면 "관리자" 출력
    let who = "";
    if (isUser) {
        who = "사용자";
    }
    else {
        if (isSeller) {
            who = "판매자";
        }
        else {
            who = "관리자";
        }
    }
    console.log(who);
    // isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
    // isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
    // isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
    // isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
    // isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
    // isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
    // if (isLogin && isUser) console.log("사용자 로그인 상태");
    // if (!isLogin && isUser) console.log("사용자 로그아웃 상태");
    // if (isLogin && isSeller) console.log("판매자 로그인 상태");
    // if (!isLogin && isSeller) console.log("판매자 로그아웃 상태");
    // if (isLogin && isAdmin) console.log("관리자 로그인 상태");
    // if (!isLogin && isAdmin) console.log("관리자 로그아웃 상태");
    console.log(`${who} ${status}`);
})();
