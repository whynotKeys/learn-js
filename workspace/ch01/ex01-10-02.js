/*
코드를 실행하기 전에 x, y 값을 계산해보세요.
전위형을 변수 앞에 증감 연산자가 위치하고, 후위형은 변수 뒤에 증감 연산자가 위치합니다.
전위형은 연산 전에 값을 증감시고 후위형은 연산 후에 값을 증감시킵니다.
후위형이여도 같은 수식 내에서 변수가 여러 번 사용되면 다음 연산에 증감치가 반영 됩니다.
*/

var x = 5;
var y = x++ + ++x + x++ - x--;
// 5 + 7 + 7 - 8
// x = 6 -> 8 -> 7
console.log(x, y); // 7, 11
