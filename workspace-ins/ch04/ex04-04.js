const sum = function(x, y){
  return x + y;
}
console.log(sum(10, 20));


// lodash의 curry 함수를 사용해서 sum을 커링
const currySum = _.curry(sum);
console.log(currySum(30)(40));

// lodash의 partial 함수를 사용해서 부분 적용 함수 생성
const sum100 = _.partial(sum, 100);
console.log(sum100(10));
console.log(sum100(20));
