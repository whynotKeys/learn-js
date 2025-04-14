/*
증감 연산자 a++, a--, ++a, --a
- a++ : 값을 먼저 사용한 후 1 증가 (후위 증가)
- ++a : 값을 먼저 1 증가시킨 후 사용 (전위 증가)
- a-- : 값을 먼저 사용한 후 1 감소 (후위 감소)
- --a : 값을 먼저 1 감소시킨 후 사용 (전위 감소)
*/

var count = 0; // 0으로 초기화
console.log(count); // 0 출력

count = count + 1; // 0 + 1 = 1 (기본적인 덧셈)
count += 1; // 1 + 1 = 2 (복합 대입 연산자 사용)
count++; // 2 + 1 = 3 (후위 증가 연산자)

console.log(count); // 3 출력

console.log(count++); // 3 출력 (값을 먼저 출력한 후 1 증가)
console.log(++count); // 5 출력 (값을 1 증가시킨 후 출력)

// var sum = count++ + 10; // 5 + 10 = 15
count++; // 5에서 1 증가하여 6
var sum = count + 10; // 6 + 10 = 16

console.log(sum); // 16 출력

sum = ++count + 10; // 6에서 1 증가한 7 + 10 = 17
console.log(sum); // 17 출력
