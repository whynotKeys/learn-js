/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.

*/

const isLogin = true;
const isUser = true;
const isSeller = true;
const isAdmin = true;

// isLogin이 true이면 "로그인 상태" 출력
if (isLogin) console.log("로그인 상태");
// isLogin이 false이면 "로그아웃 상태" 출력
if (!isLogin) console.log("로그아웃 상태");

// isUser가 true이면 "사용자" 출력
if (isUser) console.log("사용자");
// isSeller가 true이면 "판매자" 출력
if (isSeller) console.log("판매자");
// isAdmin이 true이면 "관리자" 출력
if (isAdmin) console.log("관리자");

// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
if (isLogin && isUser) console.log("사용자 로그인 상태");
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
if (!isLogin && isUser) console.log("사용자 로그아웃 상태");

// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
if (isLogin && isSeller) console.log("판매자 로그인 상태");
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
if (!isLogin && isSeller) console.log("판매자 로그아웃 상태");

// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
if (isLogin && isAdmin) console.log("관리자 로그인 상태");
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if (!isLogin && isAdmin) console.log("관리자 로그아웃 상태");
