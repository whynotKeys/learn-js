import { type Cat } from "./types.js";

export function appendImages(images: Cat[]){
  const catList = document.querySelector('#cat-list');

  images.forEach((item) => {
    const li = document.createElement('li'); // <li>
    const img = document.createElement('img'); // <img>
    img.src = item.url; // <img src="...">
    img.height = 200; // <img src="..." height="200">
    li.appendChild(img); // <li><img src="..." height="200"></li>
    catList?.appendChild(li); // <ul id="cat-list"><li><img src="..." height="200"></li></ul>
  });
}