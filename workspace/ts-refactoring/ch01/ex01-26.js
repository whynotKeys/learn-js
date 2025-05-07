/*
배열 생성, 읽기, 쓰기
*/

const arr = new Array(1, 2, 3); // 배열 생성

console.log("arr.length:", arr.length);

// 배열에 요소 추가
arr.push(10); // [ 1, 2, 3, 10 ]
arr[4] = 20; // [ 1, 2, 3, 10, 20 ]
arr[5] = 30; // [ 1, 2, 3, 10, 20, 30 ]

// 기존 값을 변경
arr[1] = 100; // [ 1, 100, 3, 10, 20, 30 ]

// 중간 인덱스를 건너뛰고 특정 인덱스에 값 입력
arr[9] = 200; // [ 1, 2, 3, 10, 20, 30, , , , 200 ]
// ....

// 배열에 마지막 요소 추가
arr.push(400); // 1. push 쓰기
arr[arr.length] = 500; // 2. length 쓰기

console.log("arr.length:", arr.length);
console.log("배열의 마지막 값:", arr[arr.length - 1]);
console.log(typeof arr, arr);

// 배열길이 줄여서 지정하면 뒤는 짤라버림
arr.length = 5;
console.log(typeof arr, arr);
