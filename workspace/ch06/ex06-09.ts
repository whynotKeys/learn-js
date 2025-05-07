// 인터페이스로 객체의 타입 선언
// ex06-07.ts 복사

(() => {
  // 객체의 타입 : 인터페이스 생성
  interface User {
    name: string;
    age: number;
    color?: string; // optional
    // getAge() : number; // 메서드 정의
  }

  const u1: User = {
    name: "하루",
    age: 5,
  };

  const u2: User = {
    name: "나무",
    age: 8,
    color: "brown",
  };

  console.log(u1.age, u2.name, u2.color?.toUpperCase());
  console.log(u2);
})();
