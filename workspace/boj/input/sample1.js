function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성
  console.log(data.a + data.b); // 30
}
main();

// 입력값 예시 :
// 10 20

/**
 * 표준 입력장치(console)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 객제에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim().split(" "); // 리눅스/윈도우에서 모두 쓸 수 있는 표준입력

  const result = new Object();
  result.a = parseInt(inputData[0]);
  result.b = parseInt(inputData[1]);

  return result;
}
