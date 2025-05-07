(() => {
  const btn = document.querySelector('button');
  // 이벤트 등록 방법 1: elem.on<event> 속성에 이벤트 핸들러 추가
  // DOM Level 0 방식(비표준)
  btn.onclick = function(){
    console.log('눌렀음-1');
  };
  btn.onclick = function(){
    console.log('눌렀네-2');
  };
  
  // 이벤트 등록 방법 3: addEventListener()
  // DOM Level 2 방식(표준)
  btn.addEventListener('click', function(){
    console.log('누름-3');
  });
  btn.addEventListener('click', handleClick);
  
  setTimeout(function(){
    btn.removeEventListener('click', handleClick);
  }, 1000 * 10);
  
  function handleClick(){
    console.log('눌렀소-4');
  }
})();
