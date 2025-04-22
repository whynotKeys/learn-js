/*
if문을 이용하여 사용자와 로그인 상태를 출력하세요.
*/

// 사용자 상태를 나타내는 변수들
const isLogin = true; // 로그인 상태
const isUser = true; // 사용자
const isSeller = false; // 판매자
const isAdmin = false; // 관리자

// 기본 로그인 상태 출력
// isLogin이 true이면 "로그인 상태" 출력
if (isLogin) console.log('로그인 상태');
// isLogin이 false이면 "로그아웃 상태" 출력
if (!isLogin) console.log('로그아웃 상태');

// 사용자 유형 출력
// isUser가 true이면 "사용자" 출력
if (isUser) console.log('사용자');
// isSeller가 true이면 "판매자" 출력
if (isSeller) console.log('판매자');
// isAdmin이 true이면 "관리자" 출력
if (isAdmin) console.log('관리자');

// 로그인 상태와 사용자 유형을 조합한 출력
// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
if (isLogin && isUser) console.log('사용자 로그인 상태');
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
if (!isLogin && isUser) console.log('사용자 로그아웃 상태');

// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
if (isLogin && isSeller) console.log('판매자 로그인 상태');
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
if (!isLogin && isSeller) console.log('판매자 로그아웃 상태');

// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
if (isLogin && isAdmin) console.log('관리자 로그인 상태');
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if (!isLogin && isAdmin) console.log('관리자 로그아웃 상태');

/* 박선영 */
// 로그인 상태를 저장하는 변수
let loginStatus = '';
if (isLogin === true) {
  loginStatus = '로그인 상태';
}
if (isLogin === false) {
  loginStatus = '로그아웃 상태';
}

// 사용자 유형을 저장하는 변수
let userType = '';
if (isUser === true) {
  userType = '사용자';
}
if (isSeller === true) {
  userType = '판매자';
}
if (isAdmin === true) {
  userType = '관리자';
}

// 저장된 상태 출력
console.log(loginStatus);
console.log(userType);
console.log(userType, loginStatus);

/* 남상호, 유시원

const isLogin = true;
// isLogin이 true이면 "로그인 상태" 출력
if (isLogin == true) console.log("로그인 상태");
// isLogin이 false이면 "로그아웃 상태" 출력
if (isLogin == false) console.log("로그아웃 상태");

const isUser = true;
// isUser가 true이면 "사용자" 출력
if (isUser == true) console.log("사용자");

const isSeller = false;
// isSeller가 true이면 "판매자" 출력
if (isSeller == true) console.log("판매자");

const isAdmin = false;
// isAdmin이 true이면 "관리자" 출력
if (isAdmin == true) console.log("관리자");

// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
if (isLogin == true && isUser == true) console.log("사용자 로그인 상태");
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
if (isLogin == false && isUser == true) console.log("사용자 로그아웃 상태");

// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
if (isLogin == true && isSeller == true) console.log("판매자 로그인 상태");
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
if (isLogin == false && isSeller == true) console.log("판매자 로그아웃 상태");

// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
if (isLogin == true && isAdmin == true) console.log("관리자 로그인 상태");
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if (isLogin == false && isAdmin == true) console.log("관리자 로그아웃 상태");
*/

/*  */

// const isLogin = true;
// const isUser = true;
// const isSeller = false;
// const isAdmin = false;

// if (isUser && isLogin) {
//   console.log("로그인한 사용자 입니다");
// }
// if (isAdmin && isLogin) {
//   console.log("로그인한 어드민입니다");
// }
// if (isSeller && isLogin) {
//   console.log("로그인한 판매자입니다");
// }