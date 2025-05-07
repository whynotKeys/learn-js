// 타입 가드 - 함수가 null을 리턴할 수 있을 경우

(() => {
  const a = document.querySelector('a[href="ch06/ex06-24.js"]');

  // FIXME 타입 단언을 사용해서 타입 에러를 없애세요.
  // if (a !== null) {
  //   a.textContent += " 클릭";
  // }

  a!.textContent += " 클릭"; // Tyescript 변수 뒤에 ! : Non-null assertion // 지정한 객체가 null이나 undefined가 아님을 단언
})();
