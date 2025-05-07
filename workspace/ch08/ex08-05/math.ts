// Named Export : 각 구성 요소 앞에 export 키워드 지정하거나 export { plus, minus } 형태로 선언과 분리해서 따로 작성 가능
export function plus(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

export function minus(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

// Default Export : 한 파일에서 1번만 가능. import하면서 이름을 정할 수 있음
// export default function multiply(a: number, b: number) {
//   console.log(`${a} * ${b} = ${a * b}`);
//   return a * b;
// }

// 타입
export type Member = {
  name: string;
  age: number;
};

// export default {함수1, 함수2, 함수3} 이런 식으로 객체 형태로 여러개의 함수를 내볼낼 수도 있음
export function plus1(a: number, b: number) {
  console.log(`${a} + ${b} = ${a + b}`);
  return a + b;
}

export function minus1(a: number, b: number) {
  console.log(`${a} - ${b} = ${a - b}`);
  return a - b;
}

export default { plus1, minus1 };
