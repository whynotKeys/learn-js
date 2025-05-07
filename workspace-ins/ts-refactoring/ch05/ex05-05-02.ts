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
      const btn = event.target; // 클릭 이벤트가 발생한 요소(<button>)
      // btn의 조상중 셀렉터와 일치하는 가장 가까운 조상
      const liNode = btn.closest('li'); // <li data-no="3">
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
      titleEl.appendChild(titleEl.firstChild.firstChild);
      titleEl.firstChild.remove();
  
      // 박선영
      // titleEl.textContent = titleEl.firstChild.textContent;
  
  
    }else{ // done이 false라면 <span>샘플3</span> -> <span><s>샘플3</s></span>로 수정
      const sElem = document.createElement('s'); // <s>
      sElem.appendChild(titleEl.firstChild); // <s>샘플3</s>, <span></span>
      titleEl.appendChild(sElem); // <span><s>샘플3</s></span>
    }
    targetLi.dataset.done = !done; // 완료 여부를 토글
  }
  
  // 박상희
  function toggleDone(no){
    const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
    const targetTitle = targetLi.querySelector('.title');
    const targetState = targetLi.dataset.todoState;
    const titleTxt = targetTitle.textContent;
    
    if(targetState === 'completed'){
      //현재 상태가 완료(completed) 상태이면,
      //미완료 상태(not-completed)로 바꾸고, 취소선(s)을 제거한다.
  
      targetLi.dataset.todoState = 'not-completed';
      targetTitle.querySelector('s').remove();
      targetTitle.textContent = titleTxt;
  
    }else{
      //현재 상태가 미완료(not-completed)상태이면,
      //완료 상태(completed)로 바꾸고, 취소선(s)을 추가한다.
      
      const sElem = document.createElement('s');
  
      targetLi.dataset.todoState = 'completed';
      sElem.append(titleTxt);
      targetTitle.textContent = '';
      targetTitle.appendChild(sElem);
    }
  }
  
  // 김연호
  function toggleDone(no) {
    // 일단 취소선을 그을 부분을 선택해줘야게쬬?
    const titleElem = document.querySelector(
      `.todolist > li[data-no="${no}"] > span:nth-child(2)`
    );
    // 열심히 조건을 생각해보자
    const isDone = titleElem.querySelector("s") !== null;
    const text = titleElem.textContent;
    //<s>태그가 null 이 아니라면 즉, 취소선이 있는 상태
    if (isDone) {
      titleElem.innerHTML = text;
    } else {
      //<s>태그가 없는 상태이다 만들어 줘야겠지?
      titleElem.innerHTML = `<s>${text}</s>`;
    }
  }
  
  // 조현수
  function toggleDone(no) {
    const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
    const titleElem = targetLi.querySelector("span:nth-child(2)");
    const titleTxt = titleElem.firstChild;
    let currentDone = targetLi.dataset.done;
  
    if (currentDone == "false") {
      const cancleLine = document.createElement("s");
      titleElem.appendChild(cancleLine);
      cancleLine.appendChild(titleTxt);
      targetLi.dataset.done = "true";
    } else {
      const cancleLine = titleElem.querySelector("s");
      const titleTxt = cancleLine.firstChild;
      titleElem.appendChild(titleTxt);
      cancleLine.remove();
      targetLi.dataset.done = "false";
    }
  }
  
  // 길인환
  function toggleDone(no) {
    // 밑에서 가져왔길래 가져옴
    const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
    // 숫자빼고 취소되야 하니까
    const titleSpan = targetLi.children[1]; // 두 번째 span(텍스트 부분)
  
    // 현재 s 태그 확인 (완료 상태인지 아닌지)
    const isDone = titleSpan.querySelector("s");
  
    if (isDone) { //isDone이 true라면(s가 있다면)
      // 이미 완료 상태라면 >>> 미완료로 되돌리기
      const text = isDone.textContent; // s 태그 안의 텍스트만 가져옴
      titleSpan.textContent = text; // s 태그 제거하고 텍스트만 남기기
    } else { //isDone이 false라면(s가 없다면)
      // 미완료 상태라면 >>> 완료 상태로 변경하기
      const text = titleSpan.textContent; // 그냥 텍스트를 가져옴
      titleSpan.innerHTML = `<s>${text}</s>`; // s 태그로 감싸기
    }
    // console.log(no);
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
