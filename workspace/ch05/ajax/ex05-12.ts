// 랜덤 고양이 이미지 가져오기 - XMLHttpRequest 사용 

import { Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button'); // 버튼 찾아오기
btn?.addEventListener('click', getImages); // 함수에 괄호를 붙이면 바로 실행하고 리턴 값을 받게 됨. 클릭할 때 실행할 거기 떄문에 () 없음


function getImages(): void {
  // Ajax 프로그래밍 순서 (: 서버와 페이지 새로고침 없이 통신)
  // 1. XMLHttpRequest 객체 생성
  const xhr = new XMLHttpRequest();

  // 2. 서버에 보낼 요청 준비(open)
  xhr.open('GET', url, true); // get방식으로 url주소에 동기 방식(false)으로

  // 3. 서버에서 받은 응답 데이터 처리
  xhr.addEventListener('load', function() {  
    const result = this.responseText; // 여기서 this : xhr
    console.log(result);
    const data : Cat[] = JSON.parse(result);
    console.log(data[0]["url"]);
    appendImages(data);

  }); 

  // 4. 서버에 요청(send)
  xhr.send();
};
