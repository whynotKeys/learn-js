(() => {
  /*
  new Object() - 생성자 함수로 객체 생성
  */
  
  // 몰라핑 회원의 속성(변수)
  const userName1 = "몰라핑";
  const userNo1 = 2;
  const gender1 = "male";
  const level1 = "diamond";
  const userPassword1 = "1234";
  const userAge1 = 6;
  const email1 = "abc@hanmail.com";
  
  // 알아핑 회원의 속성(변수)
  const userName2 = "알아핑";
  const userNo2 = 3;
  const gender2 = "female";
  const level2 = "gold";
  const userPassword2 = "1234";
  const userAge2 = 30;
  const email2 = "abcd@hanmail.com";
  
  // 변수에서 값 꺼내기
  console.log(userName1, userAge1);
  console.log(userName2, userAge2);
  
  // 몰라핑 회원의 속성(객체, Object)
  const user1 = new Object();
  user1.userName = "몰라핑";
  user1.userNo = 2;
  user1.userGender = "male";
  user1.userLevel = "diamond";
  user1.userPassword = "1234";
  user1.userAge = 6;
  user1.userEmail = "abc@hanmail.com";
  
  // 알아핑 회원의 속성(객체, Object)
  const user2 = new Object();
  user2.userName = "알아핑";
  user2.userNo = 3;
  user2.gender = "female";
  user2.level = "gold";
  user2.userPassword = "1234";
  user2.userAge = 30;
  user2.userEmail = "abcd@hanmail.com";
  
  // 객체에서 값 꺼내기
  console.log(user1.userName, user1.userAge);
  console.log(user2.userName, user2.userAge);
  
  console.log(user1.userPassword === user2.userPassword);
  
})();
