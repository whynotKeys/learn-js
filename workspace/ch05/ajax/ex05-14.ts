// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex05-13.ts 복사

// axios 타입 추가
// npm i @types/axios

import { type Cat } from "./types.js";
import { appendImages } from "./utils.js";

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('button'); // 버튼 찾아오기

btn?.addEventListener('click', getImages); // 함수에 괄호를 붙이면 바로 실행하고 리턴 값을 받게 됨. 클릭할 때 실행할 거기 떄문에 () 없음

async function getImages() {
  try {
    const response = await axios.get<Cat[]>(url);
    const data  = response.data;
    appendImages(data);
  } catch(err) { // 네트워크 오류
    console.log('에러발생',err);
  }
};