/*
첫번째(:두부)와 마지막(:라면) 구매 항목을 출력
firstChild, firstElementChild, lastChild, lastElementChild: 자식 요소 접근
previousElementSibling, nextElementSibling: 형제 요소 접근
*/

console.log("2. Child/Sibling 등으로 자식/형제요소 접근");

// 자식 요소 꺼내보기
console.log("shoppingList의 자식 요소들: ", shoppingList.childNodes); // 주석, 줄바꿈까지 자식이라고 생각함
console.log("shoppingList의 첫번 째 자식: ", shoppingList.firstChild); // 주석, 줄바꿈까지 자식이라고 생각함

console.log("shoppingList의 첫번 째 자식(공백제외): ", shoppingList.firstElementChild); // 유의미한 자식요소만 가져옴
console.log("shoppingList의 자식요소의 수(공백제외): ", shoppingList.childElementCount); // 자식요소의 수

const firstElementLi = shoppingList.firstElementChild; // ul의 첫번째 자식 요소
console.log(firstElementLi);

const firstTextNode = firstElementLi.firstChild; // = shoppingList.firstElementChild.firstChild 텍스트 노드 객체 선택
console.log(firstTextNode);

console.log("첫째요소 : ", firstTextNode);
console.log("첫째요소 값: ", shoppingList.firstElementChild.firstChild.nodeValue);

// 이전/다음 형제 요소 가져오기
const secondItem = shoppingList.children[1];
const firstItem = secondItem.previousElementSibling;
const lastItem = secondItem.nextElementSibling;
console.log("1.", firstItem.firstChild, "\n2.", secondItem.firstChild, "\n3.", lastItem.firstChild);

// 마지막거도 부를 수 있음
console.log("마지막요소 값: ", shoppingList.lastElementChild.firstChild.nodeValue);

// 라면(=마지막 요소) 꺼내기
// 평범하게 꺼내기
console.log(shoppingList.lastElementChild.innerText);
// 아리아나그란데 식으로 꺼내기
const lastElement = shoppingList.firstElementChild.nextElementSibling.nextElementSibling.innerText;
console.log(lastElement);

console.log("----------------------------------------------");
