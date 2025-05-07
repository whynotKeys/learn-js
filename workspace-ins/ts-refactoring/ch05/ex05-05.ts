(() => {
  /**
   * Todo 아이템 하나를 표현하는 DOM 요소를 생성하는 함수
   * @param {Object} item - Todo 아이템 객체 {no: number, title: string, done: boolean}
   * @returns {HTMLElement} 생성된 Todo 아이템의 DOM 요소
   */
  function getTodoItemElem(item){
    // item -> { no: 3, title: '라면', done: true } // Todo 객체
    /* DOM 객체
    return (
      <li data-no="3" data-done="true">
        <span>3</span>
        <span>샘플3</span>
        <button type="button">삭제</button>
      </li>
    );
    */
  
    // <li>
    const liElem = document.createElement('li');
    // <span>
    const noElem = document.createElement('span');
    // <span>
    const titleElem = document.createElement('span');
    // <button>
    const deleteElem = document.createElement('button');
  
    // 3
    const noTxt = document.createTextNode(item.no);
    // 샘플3
    const titleTxt = document.createTextNode(item.title);
    // 삭제
    const deleteTxt = document.createTextNode('삭제');
  
    // <span>3</span>
    noElem.appendChild(noTxt);
    // <span>샘플3</span>
    titleElem.appendChild(titleTxt);
    // <button type="button">삭제</button>
    deleteElem.setAttribute('type', 'button');
    titleElem.setAttribute('tabindex', 0); // 완료/미완료 처리를 위한 탭 포커싱 ***** 접근성
    deleteElem.appendChild(deleteTxt);
  
    // <li><span>3</span></li>
    liElem.appendChild(noElem);
    // <li><span>3</span><span>샘플3</span></li>
    liElem.appendChild(titleElem);
    // <li><span>3</span><span>샘플3</span><button type="button">삭제</button></li>
    liElem.appendChild(deleteElem);
  
    // custom 속성
    // <li data-no="3">
    // elem.dataset.no -> 3
  
    // <li> -> <li data-no="3" data-done="true">
    // liElem.setAttribute('data-no', item.no);
    // liElem.setAttribute('data-done', 'true');
  
    liElem.dataset.no = item.no;
    liElem.dataset.done = item.done;
  
    // "삭제" 버튼에 클릭 이벤트 핸들러 추가
    deleteElem.addEventListener('click', function(event){
      // no를 찾아서~~~ 첫번째 방법
      const btn = event.target; // 클릭 이벤트가 발생한 요소(<button>)
      // btn의 조상중 셀렉터와 일치하는 가장 가까운 조상
      const liNode = btn.closest('li'); // <li data-no="3">
      deleteItem(liNode.dataset.no);
    });
  
    // 삭제 이벤트 등록
    // deleteElem.setAttribute('onclick', `deleteItem(${item.no})`);
  
    // 완료/미완료 처리
    titleElem.addEventListener('click', function(event){
      // no를 찾아서~~~ 첫번째 방법
      const titleEl = event.target; // 클릭 이벤트가 발생한 요소
      // titleEl의 조상중 셀렉터와 일치하는 가장 가까운 조상
      const liNode = titleEl.closest('li'); // <li data-no="3">
      toggleDone(liNode.dataset.no);
    });
  
    // 완료/미완료 처리
    // titleElem.setAttribute('onclick', `toggleDone(${item.no})`);
    
    // <li>
    //   <span>3</span>
    //   <span>샘플3</span>
    //   <button type="button">삭제</button>
    // </li>
    return liElem;
  }
  
  /**
   * 추가 버튼 클릭 시 실행되는 이벤트 핸들러
   * 입력창의 값을 가져와 새로운 Todo 아이템을 추가
   */
  function handleAdd(){
    const inputElem = document.querySelector('.todoinput > input');
    if(inputElem.value.trim() !== '') {
      addItem(inputElem.value.trim()); // <input>, <select> 같은 폼의 입력 요소에는 value 속성으로 사용자가 입력/선택한 값이 저장되어 있음
      inputElem.value = '';
      inputElem.focus();
    }
  }
  
  /**
   * 입력창에서 키보드 입력 시 실행되는 이벤트 핸들러
   * Enter 키 입력 시 추가 기능 실행
   * @param {KeyboardEvent} event - 키보드 이벤트 객체
   */
  function handleKeyup(event){
    if(event.key === 'Enter') handleAdd();
  }
  
  /**
   * 새로운 Todo 아이템을 목록에 추가하는 함수
   * @param {string} title - 추가할 Todo 아이템의 제목
   */
  function addItem(title){
    const todoList = document.querySelector('.todolist');
  
    const item = {
      // children: 자식노드의 목록(요소노드)
      no: todoList.children.length + 1,
      // no: document.querySelectorAll('.todolist > li').length + 1,
      // no: ++itemNo,
      // title: title, // 속성값을 담는 변수가 속성명과 일치할 경우 속성값 생략 가능
      title,
      done: false // 미완료 상태
    };
    
    const todoLi = getTodoItemElem(item);
    console.log(todoLi);
    
    todoList.appendChild(todoLi);
  }
  
  /**
   * Todo 아이템의 완료/미완료 상태를 토글하는 함수
   * @param {number} no - 토글할 Todo 아이템의 번호
   */
  function toggleDone(no){
    /*
      <li data-no="3" data-done="true">
        <span>3</span>
        <span>샘플3</span>
        <button type="button">삭제</button>
      </li>
    */
    const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
    const done = targetLi.dataset.done === 'true';
    console.log(typeof done, done);
    const titleEl = targetLi.querySelector('span:last-of-type'); // <span>샘플3</span>
    if(done){ // done이 true라면 <span><s>샘플3</s></span> -> <span>샘플3</span>로 수정        
      titleEl.appendChild(titleEl.firstChild.firstChild); // <span><s>샘플3</s></span> -> <span><s></s>샘플3</span>
      titleEl.firstChild.remove(); // <span><s></s>샘플3</span> -> <span>샘플3</span>
    }else{ // done이 false라면 <span>샘플3</span> -> <span><s>샘플3</s></span>로 수정
      const sElem = document.createElement('s'); // <s>
      sElem.appendChild(titleEl.firstChild); // <s>샘플3</s>, <span></span>
      titleEl.appendChild(sElem); // <span><s>샘플3</s></span>
    }
    targetLi.dataset.done = !done; // 완료 여부를 토글
  }
  
  /**
   * Todo 아이템을 삭제하는 함수
   * @param {number} no - 삭제할 Todo 아이템의 번호
   */
  function deleteItem(no){
    const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
    targetLi.remove();
  }
})();
