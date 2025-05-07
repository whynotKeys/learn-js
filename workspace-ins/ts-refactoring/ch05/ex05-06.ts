(() => {
  document.addEventListener('DOMContentLoaded', function(){
    const a = document.querySelector('a');
    const img = document.querySelector('img');
    const input = document.querySelector('input');
  
    // 표준 속성 접근
    console.log(a.href);
    console.log(img.src);
    console.log(img.width);
    console.log(img.height);
    console.log(input.type);
    console.log(input.name);
    console.log(input.value);
    
    // 비표준 속성 접근(비추천)
    console.log(img.format); // undefined
    console.log(img.getAttribute('format')); // png
  
    // 커스텀 속성 접근
    console.log(img.dataset);
    console.log(img.dataset.age);
    console.log(img.dataset.format);
    console.log(img.dataset.userName);
    img.dataset.address = '서울시';
  
  });
})();
