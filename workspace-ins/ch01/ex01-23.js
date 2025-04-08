/*
new Object() - 생성자 함수로 객체 생성
*/


// 몰라핑 회원의 속성
const userName1 = '몰라핑';
const userNo1 = 3;
const userGender1 = 'male';
const userLevel1 = 'diamond';
const userPassword1 = '1234';
const userAge1 = 6;
const userEmail1 = 'uzoolove@gmail.com';

console.log(userName1, userAge1);

// 호정핑 회원의 속성
const userName2 = '호정핑';
const userNo2 = 4;
const userGender2 = 'female';
const userLevel2 = 'gold';
const userPassword2 = '1234';
const userAge2 = 30;
const userEmail2 = 'hojeong@gmail.com';

console.log(userName2, userAge2);

// 몰라핑 회원의 속성(객체, Object)
const user1 = new Object();
user1.userName = '몰라핑';
user1.userNo = 3;
user1.userGender = 'male';
user1.userLevel = 'diamond';
user1.userPassword = '1234';
user1.userAge = 6;
user1.userEmail = 'uzoolove@gmail.com';

console.log(user1.userName, user1.userAge);

// 호정핑 회원의 속성(객체, Object)
const user2 = new Object();
user2.userName = '호정핑';
user2.userNo = 4;
user2.userGender = 'female';
user2.userLevel = 'gold';
user2.userPassword = '1234';
user2.userAge = 30;
user2.userEmail = 'hojeong@gmail.com';

console.log(user2.userName, user2.userAge);