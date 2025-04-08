function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성
  console.log(data);
}
main();

/**
 * 표준 입력장치 (콘솔)에서 입력된 데이터를 읽어서 숫자로 변환한 후 반환한다.
 * @returns {string|number} 읽은 데이터(숫자일 경우 number로 형변환))
 */
function getData() {
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim();
  const result = isNaN(inputData) ? inputData : Number(inputData); // 입력값이 숫자가 아닌 경우 그대로 반환
  // 숫자인 경우 parseInt로 변환하여 반환

  return result;
}
