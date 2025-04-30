// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(()=>{
  // 인터페이스 생성
  // type User = {
  interface User {
    name: string;
    age: number;
  };

  const u1: User = {
    name: 'haru',
    age: 5
  };
  const u2: User = {
    name: 'namu',
    age: 8
  };
  
  console.log(u1.age, u2.name.toUpperCase());
})();