const fs = require("fs");
// const fileData = fs.readFileSync('./02-ex-data.txt').toString().trim().split(' ');
// const fileData = fs.readFileSync('.dev/stdin').toString().trim().split(' '); // 리눅스에서 쓰는 표준입력
const fileData = fs.readFileSync(0).toString().trim().split(" "); // 리눅스/윈도우에서 모두 쓸 수 있는 표준입력
console.log(fileData);

const a = parseInt(fileData[0]); // 정수형으로 변경
const b = parseInt(fileData[1]); // 정수형으로 변경

console.log(a + b);
