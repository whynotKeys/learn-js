function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  console.log(data);
}

/**
 * 표준 입력장치(콘솔)에서 여러줄로 입력된 줄당 여러 건의 데이터를 읽어서 숫자로 변환한 후
 * 배열로 저장하여 반환한다.
 * @returns {[]} 2차원 배열
 */
function getData() {
  const fs = require("fs");
  // '23 48\n25\n'
  const fileData = fs.readFileSync(0).toString();
  // ['23 48', '25']
  const arr = fileData.trim().split("\n");

  const result = []; // 리턴할 2차원 배열
  // for (let i=0; i< arr.length; i++) {
  //   const row = arr[i]; // '23 48', '25'
  //   const rowArr = row.split(' '); // ['23', '48'], ['25']
  //   for (let k=0; k<rowArr.length; k++) {
  //     rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
  //   }
  //   result.push(rowArr);
  // }

  for (let row of arr) { // '23 48', '25'
    const rowArr = row.split(' '); // ['23', '48'], ['25']
    for (let k=0; k<rowArr.length; k++) {
      rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    }
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
    // result.push(rowArr);
  }
  
  return result.length===1 ? result[0] : result;
  // return result;
}

main();