(() => {
  /*
  증감 연산자 a++, a--, ++a, --a
  */
  
  var count = 0; // 0으로 초기화
  console.log(count);
  
  count = count + 1; // 0 + 1 = 1
  count += 1; // 1 + 1 = 2
  count++; // 2 + 1 = 3
  
  console.log(count); // 3
  
  // 후위형·전위형 증감연산자
  console.log("count++:", count++); // 3출력 후 4가 됨
  console.log("++count:", ++count); // 5가 되고 5 출력
  
  var sum = count++ + 10; // 5 + 10 = 15 후에 ++작동
  console.log(sum); // 15 되고 그 다음 count는 6이 됨
  
  sum = ++count + 10; // 7 + 10
  console.log(sum); // 17
  
})();
