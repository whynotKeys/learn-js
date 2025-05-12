// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex05-12.ts 복사


import { Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button'); // 버튼 찾아오기
btn?.addEventListener('click', getImages); // 함수에 괄호를 붙이면 바로 실행하고 리턴 값을 받게 됨. 클릭할 때 실행할 거기 떄문에 () 없음


async function getImages() {
  try {
    const response = await fetch(url);
    console.log('response', response);
    if (response.ok) {
    const data: Cat[] = await response.json();  
    appendImages(data);
  } else {
    console.log(response.status, '에러 발생');
  }

  } catch(err) {
    console.log('에러발생',err);
  }
};