(() => {
  function sum(a, b, c){
    return a + b + c;
  }
  console.log(sum(10, 20, 30));
  
  let currySum = function(a){
    return function(b){
      return function(c){
        return a + b + c;
      };
    };
  }
  
  currySum = a => b => c => a + b + c;
  
  console.log(currySum(10)(20)(30));
})();
