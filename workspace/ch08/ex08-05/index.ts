// import 구문은 보통 모듈의 최상단에 정의!

// import { plus, minus } from "./math.js"; // Named Export 가져오기

// Default Export 가져오기 : 이름을 import할 때 마음대로 정함
import MathMultiply from "./math.js"; // Default Export 가져오기1<함수 1개>
import Math from "./math.js"; // Default Export 가져오기2<객체>

// Named Import
import { plus as add } from "./math.js"; // Named Import로 이름 지정해서 가져오기

// Mixed Import : 섞어서 가져오기. 혼동을 유발함으로 권장하는 방법은 아님.
import YourMath, { plus, minus } from "./math.js";

// Type Import : 타입이라고 명시해주는 것이 좋음
import { type Member } from "./math.js";

// plus(1, 2);
// minus(2, 3);

// MathMultiply(3, 4);

Math.plus1(1, 2);
Math.minus1(2, 3);

add(1, 2);

YourMath.plus1(1, 2);
YourMath.minus1(2, 3);

const haru: Member = {
  name: "하루",
  age: 5,
};
console.log(haru);

// Dynamic Import
// ES2015 Promise 방식
if (Math.minus1(5, 6) < 0) {
  console.log("다이내믹임포트실행");
  import("./math.js").then((dynamicMath) => {
    dynamicMath.plus(5, 6);
  }); // import해서 js 파일 실행되고 나면 then 뒤의 함수를 호출한다 : callback 함수

  //ES2017 async/await 방식
  const dynamicMath2 = await import("./math.js");
  console.log("다이내믹임포트2실행");
  dynamicMath2.minus(8, 9);
}
