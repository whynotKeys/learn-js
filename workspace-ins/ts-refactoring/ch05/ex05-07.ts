(() => {
  document.addEventListener('DOMContentLoaded', function(){
    const smile = document.querySelector('span');
    console.log(smile.style);
    console.log(smile.style.left, smile.style.top);
  
    // 지정한 함수를 지정한 시간(ms)이 흐른 뒤에 실행
    setTimeout(function(){
      smile.style.left = '166px';
      smile.style.top = '33px';
      smile.style.fontSize = '20px';
    }, 1000);
  
    document.addEventListener('mousemove', function(event){
      const x = event.clientX - smile.clientWidth;
      const y = event.clientY - smile.clientHeight;
  
      // smile.style.left = x + 'px';
      // smile.style.top = y + 'px';
      // smile.style.fontSize = x / 5 + 'px';
  
      smile.style.cssText = `left: ${x}px; top: ${y}px; font-size: ${x / 5}px;`;
      // smile.setAttribute('style', `left: ${x}px; top: ${y}px; font-size: ${x / 5}px;`);
    });
    
  });
})();
