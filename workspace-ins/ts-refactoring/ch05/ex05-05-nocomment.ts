(() => {
  // "추가" 버튼 클릭 이벤트 핸들러
  function handleAdd(){
    const inputElem = document.querySelector('.todoinput > input');
  
    if(inputElem.value.trim() !== '') {
      const title = inputElem.value.trim();
      const todoList = document.querySelector('.todolist');
      const item = {
        no: todoList.children.length + 1,
        title,
        done: false // 미완료 상태
      };
  
      const liElem = document.createElement('li');
      const noElem = document.createElement('span');
      const titleElem = document.createElement('span');
      const deleteElem = document.createElement('button');
  
      const noTxt = document.createTextNode(item.no);
      const titleTxt = document.createTextNode(item.title);
      const deleteTxt = document.createTextNode('삭제');
  
      noElem.appendChild(noTxt);
      titleElem.appendChild(titleTxt);
      deleteElem.setAttribute('type', 'button');
      titleElem.setAttribute('tabindex', 0);
      deleteElem.appendChild(deleteTxt);
  
      liElem.appendChild(noElem);
      liElem.appendChild(titleElem);
      liElem.appendChild(deleteElem);
  
      liElem.dataset.no = item.no;
  
      // 삭제 이벤트 등록
      deleteElem.setAttribute('onclick', `deleteItem(${item.no})`);
  
      // 완료/미완료 처리
      titleElem.setAttribute('onclick', `toggleDone(${item.no})`);
      
      todoList.appendChild(liElem);
  
  
      inputElem.value = '';
      inputElem.focus();
    }
  }
  
  // 완료/미완료 처리
  function toggleDone(no){
    console.log(no);
    
  }
  
  // 할일 삭제
  function deleteItem(no){
    const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`);
    targetLi.remove();
  }
})();
