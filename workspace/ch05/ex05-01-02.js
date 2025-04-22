/*
첫번째 구매 항목(:두부)을 출력하고 그 값을 양파로 수정
document.getElementById(id): id속성으로 요소 선택
텍스트 노드의 nodeValue: 문자열 값
*/

// DOM에서 getElement로 요소를 선택하는 방법
console.log("1. getElementBy (id) & (ClassName) & (TagName) 사용");

// 1. getElementById: id 속성으로 요소 선택
const shoppingListId = document.getElementById("purchases"); // ul 요소 선택
// id가 "purchases"인 요소 노드 찾기
const shoppingList = document.getElementById("purchases");
console.log("console.log(shoppingList): ", shoppingList);
console.dir("console.dir(shoppingList): ", shoppingList); // console.dir: 속성, 메소드 보여줌(쓸 일은 없음)

// 2. getElementsByClassName: class 속성으로 요소 선택 (배열 형태로 반환되므로 인덱스 지정 필요)
const shoppingListClass = document.getElementsByClassName("list")[0]; // ul 요소 선택

// 클래스명으로 꺼내기
const purchases = document.getElementsByClassName("list")[0];

// 3. getElementsByTagName: 태그로 요소 찾기
const liList = document.getElementsByTagName("li");
const firstElem = liList[0]; // 첫 번째 li 요소 선택
console.log("firstElem", firstElem);

console.dir(liList[0].innerText);
console.dir(liList[1]);
console.dir(liList[2]);

console.log("----------------------------------------------");
