function main() {
  const data = getData();
  // data에서 값을 꺼내서 해결하는 코드 작성
  console.log(data);
}
main();

/**
 * 표준 입력장치(console)에서 두 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");

  const inputData = fs.readFileSync(0).toString(); // 입력값을 가져옴
  const arr = inputData.trim().split("\n"); // 줄바꿈 기준으로 나누어 저장

  const result = []; // return 할 2차원 배열

  for (let i = 0; i < arr.length; i++) {
    // for문에 넣어서 값 꺼내어 2차원 배열에 저장
    const row = arr[i];
    let rowArr = row.split(" ");
    for (let k = 0; k < rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]); // 숫자만 들어갈 수 있도록 다듬음
    }
    result.push(rowArr);
  }

  return result;
}
