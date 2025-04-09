function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성
  console.log(data);
}
main();

/**
 * 표준 입력장치(console)에서 한 줄로 입력된 세 건의 데이터를 읽어서 숫자로 변환한 후
 * 객제에 a, b, c 속성으로 저장하여 반환한다.
 * @returns {object} a, b, c 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim().split(" ");

  const result = new Object();

  result.a = isNaN(inputData[0]) ? inputData[0] : parseInt(inputData[0]);
  result.b = isNaN(inputData[1]) ? inputData[1] : parseInt(inputData[1]);
  result.c = isNaN(inputData[2]) ? inputData[2] : parseInt(inputData[2]);

  return result;
}
