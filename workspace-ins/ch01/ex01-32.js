/*
매개변수를 가진 함수 - 도어락

올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.

*/

function doorLock(password = '') {
  const pwd = '1234';
  const subPassword = password.slice(-pwd.length);
  if (subPassword === pwd) {
    console.log('문이 열립니다.');
  } else {
    console.log('삐! 삐! 삐! 삐!');
  }
}

doorLock('111111');
doorLock('3242351234');
doorLock();
