// 타입 가드 함수 작성
// ex06-26.ts 복사

(()=>{
  interface User {
    name: string;
    age: number;
    admin: false; // admin이 true/false 여부로 User 타입인지 아닌지 확인할 수 없음
  }

  interface AdminUser {
    name: string;
    level: 1 | 2 | 3;
    admin: true; // admin이 true/false 여부로 AdminUser 타입인지 아닌지 확인할 수 없음
  }

  interface Guest {
    name: '게스트';
  }

  const user1: User = {
    name: '하루',
    age: 5,
    admin: false,
  };

  const user2: AdminUser = {
    name: '나무',
    admin: true,
    level: 2
  };

  const user3: Guest = {
    name: '게스트'
  };

  helloUser(user1);
  helloUser(user2);
  helloUser(user3);

  // User 타입이나 AdminUser 타입을 받아서 각각의 타입에 맞는 코드를 실행하는 함수
  function helloUser(user: User | AdminUser | Guest) {
    if(isAdmin(user)){
      console.log(`안녕하세요. 레벨 ${ user.level } ${ user.name } 관리자님.`);
    }else if(isGuest(user)){
      console.log(`안녕하세요. ${ user.name } 님. `)
    }else{
      console.log(`안녕하세요. ${ user.age }살 ${ user.name } 회원님.`);
    }
  }

  // 타입 가드 구문이 복잡하거나 여러번 재사용해야 할 경우 타입 가드 함수를 작성
  // user is AdminUser 구문의 의미는 isAdmin() 함수가 true를 리턴할 경우 user의 타입이 AdminUser가 됨
  function isAdmin(user: User | AdminUser | Guest): user is AdminUser{
    // 타입 가드 함수는 boolean을 리턴해야 함
    return 'admin' in user && user.admin === true;
  }

  function isGuest(user: User | AdminUser | Guest): user is Guest{
    return !('age' in user) && !('level' in user) && user.name === '게스트';
  }

})();