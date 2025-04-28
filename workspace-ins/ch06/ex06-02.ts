// 기본 타입

(()=>{

  let str: string = 'hello';
  let age: number = 9;
  let done: boolean = true;
  // done = 'false'; // 컴파일 에러

  let nullVal: null = null;
  let emptyVal: undefined;

  let todo: object = { title: 'TypeScript 공부', done: false };
  let todoList: Array<string> = ['JavaScript', 'TypeScript']; // 문자열로 구성된 배열
  let todoList2: string[] = ['React', 'Next.js']; // 문자열로 구성된 배열

  // tuple: 길이가 고정되고 각 요소의 타입이 정의된 타입
  let items: [string, number] = ['타스핑', 10];

  let userName: any = '이일구';
  userName = 219;

  let userName2: unknown = 'TSping';
  userName2 = 540;

  console.log(userName.toUpperCase());

  // console.log(userName2.toUpperCase());

})();