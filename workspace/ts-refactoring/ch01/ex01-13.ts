(() => {
  /*
  논리 연산자 &&, ||, !
  */
  console.log(`|| 논리 합(OR) 연산자-----------------`);
  //논리 합(OR) : 피연산자 둘 중 하나라도 true일 경우 true 판정
  console.log(`true || true:`, true || true); // true
  console.log(`true || false:`, true || false); // true
  console.log(`false || true:`, false || true); // true
  console.log(`false || false:`, false || false); // false
  
  console.log(`-----------------`);
  var id = "hong";
  var invalidId = id.length < 4 || id.length > 12;
  var invalidId = !(id.length >= 4 && id.length <= 12);
  
  console.log("id입력 조건에 맞지 않음", invalidId);
  
  console.log(`-----------------`);
  // falsy : number 0, string '', boolean false, object null, undefined undefined
  // truthy : 나머지
  
  // 앞의 값이 참이면 앞의 값을 반환
  // 앞의 값이 거짓이고 뒤의 값이 참이면 뒤의 값을 반환
  console.log(`"hello" || "world":`, "hello" || "world"); // "hello"
  console.log(`90 || 30:`, 90 || 30); // 90
  console.log(`null || "world":`, null || "world"); // "world"
  console.log(`undefined || "world":`, undefined || "world"); // "world"
  console.log(`0 || 100:`, 0 || 100); // 100
  
  // 이런 식으로 활용 가능
  let userName = undefined;
  let userAge = 0;
  
  console.log(userName || "guest");
  console.log(userAge || "나이 미상");
  
  console.log(`\n&& 논리 곱(AND) 연산자-----------------`);
  // 논리 곱(AND):
  // 피연산자 둘 다 true일 경우 true가 됨
  // 둘 중 하나라도 false일 경우 false를 반환
  console.log(`true && true:`, true && true); // true
  console.log(`true && false:`, true && false); // false
  console.log(`false && true:`, false && true); // false
  console.log(`false && false:`, false && false); // false
  
  // 앞의 값이 참이면 뒤의 값을 반환
  // 앞의 값이 거짓이면 앞의 값을 반환
  
  id = null; // type은 object
  // console.log("글자수:", id.length); // -> Cannot read properties of null (reading 'length') 에서 발생
  // id = "232323";
  console.log("글자수:", id && id.length); // 이전에는 이렇게 썼으나
  console.log("글자수:", id?.length); // 이제는 옵셔널체이닝이 있어서 이렇게 씀
  
  // console.log(`true && 0:`, true && 0);
  // console.log(`0 && false:`, 0 && false);
  // console.log(`false && 0:`, false && 0);
  // console.log(`0 && 0:`, 0 && 0);
  
  console.log(`[10, 20]==[10, 20]:`, [10, 20] == [10, 20]);
  
})();
