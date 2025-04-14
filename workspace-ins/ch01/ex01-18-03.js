/*
if-else if문을 이용하여 사용자와 로그인 상태를 출력하세요.
*/

// 사용자 상태를 나타내는 변수들
const isLogin = true; // 로그인 상태
const isUser = false; // 사용자
const isSeller = true; // 판매자
const isAdmin = false; // 관리자

// 기본 로그인 상태 출력
// isLogin이 true이면 "로그인 상태" 출력
// isLogin이 false이면 "로그아웃 상태" 출력
if (isLogin) {
  console.log('로그인 상태');
} else {
  console.log('로그아웃 상태');
}

// 사용자 유형 출력
// isUser가 true이면 "사용자" 출력
// isSeller가 true이면 "판매자" 출력
// isAdmin이 true이면 "관리자" 출력
if (isUser) {
  console.log('사용자');
} else if (isSeller) {
  console.log('판매자');
} else {
  console.log('관리자');
}

// 로그인 상태와 사용자 유형을 조합한 상태 출력
// isLogin이 true이고 isUser가 true 이면 "사용자 로그인 상태" 출력
// isLogin이 false이고 isUser가 true이면 "사용자 로그아웃 상태" 출력
// isLogin이 true이고 isSeller가 true이면 "판매자 로그인 상태" 출력
// isLogin이 false이고 isSeller가 true이면 "판매자 로그아웃 상태" 출력
// isLogin이 true이고 isAdmin이 true이면 "관리자 로그인 상태" 출력
// isLogin이 false이고 isAdmin이 true이면 "관리자 로그아웃 상태" 출력
if (isLogin) { // 로그인 상태일 때
  if (isUser) {
    console.log('사용자 로그인 상태');
  } else if (isSeller) {
    console.log('판매자 로그인 상태');
  } else {
    console.log('관리자 로그인 상태');
  }
} else { // 로그아웃 상태일 때
  if (isUser) {
    console.log('사용자 로그아웃 상태');
  } else if (isSeller) {
    console.log('판매자 로그아웃 상태');
  } else {
    console.log('관리자 로그아웃 상태');
  }
}