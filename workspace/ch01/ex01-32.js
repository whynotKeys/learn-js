/*
매개변수를 가진 함수 - 도어락

올바른 비밀번호가 입력되면 문이 열린다.
잘못된 비밀번호가 입력되면 경보음이 울린다.
*/

// function doorlock(password = "") { // 이렇게 사용하면 공란으로 함수 불렀을 때 매개변수에 "" 넣어줌
function doorlock(password) {
  const pwd = "1234";

  // 공란으로 함수 사용 시 입력 요청
  if (password === undefined) {
    console.log("비밀번호를 입력해주세요.");
    return;
  }

  // 입력된 password의 끝자리만 잘라서 확인
  const subPassword = password.slice(-pwd.length);

  if (subPassword === pwd) {
    console.log("문이 열립니다.");
  } else {
    console.log("경보경보 침입자 발생 오마갓!!");
  }
}

doorlock("1212323232");
doorlock("23232323231234");
doorlock(); // undefined가 매개변수로 넘어감. 바로 에러 나지 않고 함수 실행되다가 undefined가 있으면 안되는 곳 있을 때 에러 남
