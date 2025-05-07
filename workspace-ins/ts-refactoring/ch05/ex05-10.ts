(() => {
  document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector('form');
    const div = document.querySelector('div');
    const p = document.querySelector('p');
  
    form.addEventListener('click', function(){
      console.log('form 클릭');
    }, true); // useCapture 생략하면 false(버블링), true로 지정하면 캡처링 단계에서 사용
    div.addEventListener('click', function(){
      console.log('  div 클릭');
    }, true);
    p.addEventListener('click', function(event){
      console.log('    p 클릭');
      // event.stopPropagation(); // 이벤트 전파 중지
    });
  
    form.addEventListener('click', function(){
      console.log('form 클릭');
    },);
    div.addEventListener('click', function(){
      console.log('  div 클릭');
    },);
  
  
  });
})();
