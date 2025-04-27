// 기본 타입

(()=>{
  let str : string = 'hello';
  let age : number = 9;
  let done : boolean = true;
  // done : 'false'; // 컴파일 에러 발생

  let nullVal : null = null;
  let emptyVal : undefined;

  let todo: object = {title:'TypeScript Study', done: false};
  let todoListStr: Array<string> = ['JS','TS']; // 문자열 배열1
  let todoListStr2: string[] = ['React','Next.js']; // 문자열 배열2
  let todoListNum: Array<number> = [1,2,3]; // 숫자 배열
  
  // tuple : 배열의 길이가 고정되고 각 요소의 타입이 정의된 타입.
  let items: [string, number] = ['타스핑',8]; 

  // any : 모든 타입을 허용. 사용 지양함!!
  let userName: any = '이화수';
  userName = 217

  let userName2: unknown = 'TSping';
  userName2 = 540

  console.log(userName.toUpperCase());
  // console.log(userName2.toUpperCase()); // 에러 나면서 컴파일 불가
})();