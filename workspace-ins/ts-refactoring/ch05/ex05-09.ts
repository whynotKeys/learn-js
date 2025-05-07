(() => {
  document.addEventListener('DOMContentLoaded', function(){
    const div = document.querySelector('div');
    div.addEventListener('click', function(event){
      console.log('div 클릭');
      console.log('이벤트가 발생한 요소', event.target);
      console.log('이벤트를 처리중인 요소', event.currentTarget);
    });
  
    const btn = document.querySelector('button');
    btn.addEventListener('click', function(event){
      console.log('btn 클릭');
      console.log('이벤트가 발생한 요소', event.target);
      console.log('이벤트를 처리중인 요소', event.currentTarget);
    });
  });
})();
