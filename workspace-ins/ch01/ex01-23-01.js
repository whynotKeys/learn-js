/*
new Object() - 생성자 함수로 객체 생성
*/

// 1. 변수로 회원 정보를 관리하는 방식 (비효율적)
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

// 2. 객체(Object)를 사용하여 회원 정보를 관리하는 방식 (효율적)
// 몰라핑 회원의 속성(객체, Object)
const user1 = new Object();  // Object 생성자 함수를 사용하여 새로운 객체 생성
user1.userName = '몰라핑';    // 객체의 속성(property) 설정
user1.userNo = 3;
user1.userGender = 'male';
user1.userLevel = 'diamond';
user1.userPassword = '1234';
user1.userAge = 6;
user1.userEmail = 'uzoolove@gmail.com';

console.log(user1.userName, user1.userAge);  // 객체의 속성 접근

// 호정핑 회원의 속성(객체, Object)
const user2 = new Object();  // Object 생성자 함수를 사용하여 새로운 객체 생성
user2.userName = '호정핑';    // 객체의 속성(property) 설정
user2.userNo = 4;
user2.userGender = 'female';
user2.userLevel = 'gold';
user2.userPassword = '1234';
user2.userAge = 30;
user2.userEmail = 'hojeong@gmail.com';

console.log(user2.userName, user2.userAge);  // 객체의 속성 접근