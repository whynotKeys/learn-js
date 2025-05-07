(() => {
  document.addEventListener('DOMContentLoaded', function(){
    const table = document.querySelector('table');
    table.addEventListener('click', function(event){
      if(event.target.tagName === 'TD'){
        event.target.classList.toggle('red');
      }
    });
  
    // 박선영
    table.addEventListener('dblclick', function (event) {
      console.log(event.target);
      console.log(event.currentTarget);
  
      if (event.target.tagName === 'TD') {
        event.target.classList.toggle('pink');
      }
    });
  });
})();
