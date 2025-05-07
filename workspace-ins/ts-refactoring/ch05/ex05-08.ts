(() => {
  document.addEventListener('DOMContentLoaded', function(){
    const list = document.querySelector('ul');
    console.log(list.className); // hello
    console.log(list.classList);
  
    list.className = 'good bye';
  
    const btn = document.querySelector('button');
    btn.addEventListener('click', function(){
      // style 객체는 인라인 스타일만 접근 가능(CSS 파일이나 <style> 태그의 스타일은 접근 안됨)
      console.log(list.style.fontSize);
  
      const computedStyle = getComputedStyle(list);
      console.log(computedStyle.fontSize);
  
      list.className = 'pad100 size30';
      console.log(computedStyle.fontSize);
    });
  
    // for(let item of list.children){
    //   item.addEventListener('click', function(event){
    //     console.log('event.target', event.target); // 실제 이벤트가 발생한 요소
    //     // if(event.target.classList.contains('line-through')){ // 지정한 class를 가지고 있는지 여부 반환
    //     //   event.target.classList.remove('line-through'); // line-through class 삭제
    //     // }else{
    //     //   event.target.classList.add('line-through'); // line-through class 추가
    //     // }
  
    //     event.target.classList.toggle('line-through'); // 있으면 제거하고 없으면 추가
    //   });
    // }
  
    // 이벤트 위임
    list.addEventListener('click', function(event){
      console.log(event.target);
      console.log(event.currentTarget);
      if(event.target.tagName === 'LI'){
        event.target.classList.toggle('line-through');
      }
    });
  
  });
})();
