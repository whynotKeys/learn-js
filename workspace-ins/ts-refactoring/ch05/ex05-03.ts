(() => {
  // HTML 문서 로딩 완료(DOM 객체 생성 완료), 이미지, css 같은 외부 컨텐츠 로딩 완료 후에 발생하는 이벤트
  window.addEventListener('load', function(){});
  
  // HTML 문서 로딩 완료(DOM 객체 생성 완료) 후에 발생하는 이벤트
  document.addEventListener('DOMContentLoaded', function(){
    // 첫번째 버튼 찾기
    const btn1 = document.querySelector('div > button');
    const btn2 = btn1.nextElementSibling;
    const btn3 = btn2.nextElementSibling;
  
    // 이벤트 등록 방법 1: elem.on<event> 속성에 이벤트 핸들러 추가
    btn1.onclick = function(){
      const movies = document.querySelector('#movies');
  
      // 임한길: 자식 li 찾고 그중에 두번째 요소요!
      const secondLi = movies.getElementsByTagName('li')[1];
  
      // 송채은: 첫번째 영화 찾은 다음에 nextSibling
      // const firstLi = movies.firstElementChild;
      // const secondLi = firstLi.nextElementSibling;
  
      console.log(secondLi?.firstChild.nodeValue);
      // textContent: 요소노드의 내부 텍스트노드의 문자열 값을 가지고 있는 속성
      console.log(secondLi?.textContent);
    };
  
    // 이벤트 등록 방법 3: addEventListener()
    btn3.addEventListener('click', function(){
      const targetList = document.querySelectorAll('.list');
      for(let i=0; i<targetList.length; i++){
        // i=0 <li>두부</li>, i=1 <li>어벤저스</li>
        const firstLi = targetList[i].firstElementChild;
        // 해당노드를 삭제한다.
        // if(firstLi) firstLi.remove();
        // firstLi?.remove(); // 옵셔널 체이닝
  
        firstLi?.parentNode.removeChild(firstLi);
      }
    });
  });
  
  // 마지막에 우유 추가
  function addMilk(){
    console.log('우유 추가 예정');
  
    const shoppingList = document.getElementById('purchases'); // <ul id="purchases" class="list">
  
    // 솔루션 1: createElement, appendChild 사용
    const newLi = document.createElement('li'); // <li>
    const newTxt = document.createTextNode('우유'); // 우유
  
    console.log(newLi.childNodes, newLi.firstChild, newLi.lastChild);
    newLi.appendChild(newTxt); // <li>우유</li>
    console.log(newLi.childNodes, newLi.firstChild, newLi.lastChild);
  
    // shoppingList.appendChild(newLi); // 맨 끝에 추가
    shoppingList.insertBefore(newLi, shoppingList.firstChild); // 맨 앞에 추가
    
    // 솔루션 2: innerHTML
    // innerHTML: 요소노드의 내부 HTML 코드값을 문자열로 가지고 있는 속성(자신 제외)
    console.log(shoppingList.innerHTML);
    // innerHTML: 요소노드의 내부 HTML 코드값을 문자열로 가지고 있는 속성(자신 포함)
    console.log(shoppingList.outerHTML);
    shoppingList.innerHTML += '<li>우유</li>';
  }
})();
