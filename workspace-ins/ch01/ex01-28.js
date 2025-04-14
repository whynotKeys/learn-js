/*
유사 배열 객체
- length 속성을 가지고 있음
- 0부터 시작하는 인덱스를 가진 속성들을 포함
- 배열처럼 동작하지만 실제 배열은 아님
*/

/**
 * 전달받은 배열의 모든 요소를 인덱스와 함께 출력한다.
 * @param {any[]} arr - 배열
 */
function printArr (arr) {
  for (let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
  }
}

// 일반 배열 사용 예시
const colorArr = [ 'orange', 'yellow', 'green' ];
colorArr.push('black'); // 배열 끝에 'black' 추가
printArr(colorArr);

/*
유사 배열 객체 예시
- length 속성으로 길이를 관리
- 0부터 시작하는 인덱스로 요소 접근
- push 메서드를 직접 구현
*/
const arr = {
  length: 3,
  0: 'orange',
  1: 'yellow',
  2: 'green',
  /**
   * 맨 끝에 지정한 elem를 추가한다.
   * @param {*} elem - 추가할 요소
   */
  push: function(elem){ // TODO this 배운 후에
    arr[arr.length] = elem; // 현재 length 위치에 요소 추가
    arr.length++; // length 증가
  }
};
arr.push('black'); // 유사 배열에 'black' 추가
arr.push('white'); // 유사 배열에 'white' 추가
printArr(arr);

// 문자열도 유사 배열 객체의 일종
// printArr('이것은 문자열');
