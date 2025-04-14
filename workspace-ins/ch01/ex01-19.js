/*
switch문을 사용한 핑 이름에 따른 수식어 변경 예제
*/

// 핑의 이름을 저장하는 변수
const pingName = '머핑';
// 기본 수식어 설정
let modifier = '모르는';

// switch문을 사용하여 핑 이름에 따라 수식어를 변경
switch (pingName) {
  case '하츄핑':
    modifier = '사랑의';
    break;
  case '포실핑':
    modifier = '복슬복슬';
    break;
  case '눈꽃핑':
    modifier = '차가운';
    break;
  case '꾸래핑':
    modifier = '거짓말쟁이';
    break;
  case '빛나핑':
    modifier = '밝은';
    break;
  case '머핑':
    modifier = '달콤한';
    break;
  // default:
  //   modifier = '모르는';
}

// 결과 출력: 수식어와 핑 이름을 함께 출력
console.log(`${modifier} ${pingName}`);