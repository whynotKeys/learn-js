/*
첫번째 구매 항목 출력(두부)하고 그 값을 양파로 수정
document.getElementById(id): id 속성으로 요소 선택
텍스트 노드의 nodeValue: 문자열 값
*/

// DOM에서 요소를 선택하는 두 가지 방법
// 1. getElementById: id 속성으로 요소 선택
// const shoppingList = document.getElementById('purchases'); // ul 요소 선택

// 2. getElementsByClassName: class 속성으로 요소 선택 (배열 형태로 반환되므로 인덱스 지정 필요)
const shoppingList = document.getElementsByClassName('list')[0]; // ul 요소 선택

// 첫 번째 항목을 선택하는 두 가지 방법
// 1. getElementsByTagName 사용: 모든 li 태그를 배열로 가져온 후 첫 번째 요소 선택
// const liList = shoppingList.getElementsByTagName('li'); // 모든 li 요소를 배열로 가져옴
// console.log(liList);
// const firstLi = liList[0]; // 첫 번째 li 요소 선택

// 2. firstElementChild 사용: 직접 첫 번째 자식 요소 선택
const firstLi = shoppingList.firstElementChild; // 첫 번째 li 요소 선택
console.log(firstLi);

// firstChild를 사용하여 텍스트 노드 선택 (요소 노드의 실제 텍스트 내용)
const firstTextNode = firstLi.firstChild; // 텍스트 노드 객체 선택
console.log(firstTextNode);
console.log('제일 먼저 구매할 항목', firstTextNode.nodeValue); // nodeValue로 실제 텍스트 값 출력

// nodeValue를 사용하여 텍스트 내용 수정
firstTextNode.nodeValue = '양파';

// lastElementChild를 사용하여 마지막 li 요소의 텍스트 내용 출력
console.log('마지막으로 사야할 품목', shoppingList.lastElementChild.firstChild.nodeValue)

// querySelector를 사용한 CSS 선택자 방식으로 마지막 요소 선택
// #purchases: id가 purchases인 요소
// > li:last-child: purchases의 직계 자식 중 마지막 li 요소
console.log(document.querySelector('#purchases > li:last-child').firstChild.nodeValue);