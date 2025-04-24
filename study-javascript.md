# 2025-03-27

**Javascript // 환경세팅 및 js 개요, 수업 설명**

## 수업 내용

- 최소 듀얼 모니터 이상으로 쓸 것/ 눈높이보다 높은 위치에 두고 관절 아낄 것
- 소개 및 인사
- 수업용 리포지토리 cloning

### 세팅

- vsc Settings 에서
  - User tab : 전역(글로벌)설정, 모든 곳에서 이렇게 쓰겠다
  - Workspace : 이 프로젝트만 적용하겠다
- File > Preferences > Settings 에서 조정
  - "Files: Auto Save": onFocusChange // 나는 안 함
  - "Editor: Font Size": 각자 맞춰서 조절
  - "Editor: Tab Size": 2
  - "Editor: Detect Indentation": 체크 해제
  - Workspace 탭 > "Files: Readonly Include"
    - Readonly Include가 보이지 않을 경우 VSCode를 최신 버전(1.79 이상)으로 업데이트
    - Add Pattern > PPT/\*\* 입력한 후 OK 선택
    - Add Pattern > workspace-ins/\*\* 입력한 후 OK 선택
    - Add Pattern > sample/\*\* 입력한 후 OK 선택
  - workspace 설정값 -> .vscode폴더에 들어감 // 이런 설정파일은 .gitignore에 추가해줘야 함
- 사용환경에 따라 자동으로 gitignore 만들 수 있는 사이트  
   https://www.toptal.com/developers/gitignore
- 깃모지 익스텐션 깔면 커밋할 때 편하게 쓸 수 있음
- sample - 예시 틀 // sorkspace-ins - 강사님이 작성하시는 코드 // workspace - 내가 실습에서 작성하는 코드
- 충돌 났는데 수업중이라 정리 어려울 때... 걍 degit으로 가져와서 보거라

  ```bash
    $ npx degit https://github.com/FEBC-13/JS/sample/02 sample/02
  ```

- vsc에서 탐색기 여는 명령어

  ```bash
    $ start .
  ```

- js는 PPT로 수업하고 react는 md파일로 수업하실 예정
- 프로토타입/클로저 어려운 개념. 이해해서 설명하기 어려워서 면접 때 단골 질문임!
- js 학습 관련 링크 // 지금은 이해하기 어려울 것
  - 모던 자바스크립트 튜토리얼: https://ko.javascript.info
  - MDN 자바스크립트: https://developer.mozilla.org/ko/docs/Web/JavaScript
- 수업은 6주, 총 5강 진행 예정 // 1강을 2주동안 할 계획이심. 과제 있다

### 자바스크립트 개요

- PPT 참고
- Netscaoe Navigator -> 파이어폭스의 전신 (프리소스되기전)
- 언어 자체는 ECMAScript가 정석 / 브라우저 환경에서 작동하는 js의 특징이나 기능은 w3c
- 2015년 6월에 ECMAScript 6 발표 = ECMAScript 2015 //
  6(es6)에서 현대적인 기능이 많이 추가 됨. 전후 차이가 많이 남. 그 이전은 거의 레거시라고 생각
  6부터는 매년 6월에 연도별로 새 버전을 발표하고 있음
- 브라우저는 HTML엔진, JS엔진 따로 가지고 있음. ex\_크롬 JS엔진 : v8 // ※ 프리소스-> 이거 받아서 콤퓨타에서 쓸 수 있게 만든 게 node.js
- 비쥬얼스튜디오코드/피그마/디스코드/슬랙 등등 다 **electron**로 만든 것 (js로 개발됨)
  vsc // help에서 Toggle Developer Tools 하면 개발자도구 켤 수 있음!
- script 태그 사용 시 type= 안 적으면 default가 js임. 안 적어도 상관 없다

- https://www.acmicpc.net/group/23092 // 백준 가입 후 그룹 가입신청. 과제 여기서 내주실 예정

**※ ＄ ㄹ 한자 1 <- != $**

---

---

# 2025-03-28

**JS // 기초이론**

## 수업 내용

### 백준 02번 예제 풀이

- `require()` 외부에서 뭐 읽어올 때 쓰는 함수
- 입력 내용 받아오는 구문
  ```js
  const fs = require("fs");
  const inputData = fs.readFileSync(0).toString().trim().split(" ");
  ```

### JS 기초이론

- 인터프리터와 컴파일러

  - 인터프리터 방식 // 고급 언어. 소스코드 통째로 실행 시작 : 한 줄 번역,실행 x 반복. 개발 편의성 및 사용 편의성 높음  
    ex: js
  - 컴파일러 방식 // 전체 소스코드를 기계어로 한 번에 번역 후 실행. 실행 빠르고 성능 좋음. 소스 조금 수정하면 전체 컴파일 필요  
     ex: c
    => 하드웨어의 발전으로 속도 모두 빨라졌기 때문에 속도차이 체감은 잘 안될 지도
    ※ JAVA는 소스코드->바이트코드->기계어 이렇게 중간단계를 둠 그걸 해주는게 JVM

- 블록주석 단축키 `shift + alt + a`
- 변수(variable)

  - JS 식별자 명명 규칙
    - 변수명, 함수명, 속성명, 클래스명 등 이름 지을 때 영문자, 숫자, \_, $만 사용해야 함. 유니코드를 사용해서 한글이나 이모지도 쓸 수 있지만 권장하지 않음
    - 첫글자에 숫자는 들어가면 X
    - if, for, function, let 등 예약어와 키워드는 사용X
    - 관례적인 명명 규칙  
      ㄴ 변수명, 함수명에는 주로 카멜 케이스(userName, userAge)  
      ㄴ 클래스명에는 주로 파스칼 케이스(HighSchool, College)  
      ㄴ 대문자 상수는 스네이크 케이스(COLOR_BLUE, COLOR_RED)

- 리터럴(literal)

  - 프로그램 소스코드에 직접 입력된 고정된 값
  - 다양한 종류의 리터럴
    - 숫자 리터럴 : 정수(`10`)/실수(`3.14`)/지수표기법(`1e3`=1\*10의 3제곱)
    - 문자열 리터럴 : 작은따옴표(`'Hello'`)/큰 따옴표(`"JS"`)/템플릿 리터럴(`	&#96; Hello ${js} World	&#96; `)
    - 불린 리터럴 : 참(`true`)/거짓(`false`)
    - 배열 리터럴 : `[ 1, 2, 3 ]`
    - 객체 리터럴 : `{ name: '무지', age: 30 }`
    - null 리터럴 : `null`
    - undefined 리터럴 : `undefined`

- 강형 언어 / 약형 언어
  - 강형(strongly typed) 언어
    -> 변수 선언 시 데이터 타입을 지정하는 언어 (C++, Java 등)
  - 약형(weakly typed) 언어
    -> 변수 선언 시 데이터 타입을 지정하지않는 언어 (python, JavaScript 등)
    값에 따라서 자동으로 데이터 타입이 결정 됨 (동적 타입, dynamically typed)
    **- TypeScript = JavaScript + Type. 타입을 넣은 강형 자바스크립트인 것!!!**
    - TypeScript는 MS에서 만든 걸로, 말하자면 공식 아님. TS로 코딩하면 JavaScript로 변환(트랜스)작업 필요함
- JS 데이터 타입
  - 원시 타입(Primitive type)
    - number/string/boolean/null(값이 없음을 명시적으로 지정:object type)/undefined(선언만 되고 값이 할당되지 않은 변수)/BitInt/Symbol
  - 참조 타입(Reference type)
    - Object(Array,Function,Date,RegExp...)
- 산술 연산자

  - `+`, `-`, `*`, `/`, `%`, `**`

- ` ` 으로 감싼 문장 안에 `${}`로 변수 불러오기
  ```js
  var age = 2 ** 3;
  console.log(`당신의 나이는 ${age}살입니다.`);
  ```
- 과제 : 백준 ~09번 13까지도 되려나
- 회고 중 질문 생긴 경우 에러방에 찾아가거나 @로 강사님 부르기

<br />
<br />

---

---

# 2025-03-31

**Javascript // 연산자**

## 수업 내용

### 연산자

- **대입연산자**
  - `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`
  - 기본 대입 연산자(=): 우측 항목을 계산한 후 좌측 항목에 할당
  - 연산 후 대입: 좌측 항목에 우측 항목을 연산한 후 좌측 항목에 할당(누적)
- 증감연산자

  - `++`, `--`
  - 값을 1 증가 또는 감소
  - 후위형(`count++`, `count--`)
    - 현재 값을 먼저 사용한 후 값을 증가 또는 감소
    - 다른 연산자와 함께 사용할 경우 원래 값이 연산에 반영된 후 값이 변경
  - 전위형(`++count`, `--count`)
    - 값을 먼저 증가 또는 감소한 후 변경된 값을 사용
    - 다른 연산자와 함께 사용할 경우 증가/감소 값이 바로 반영

- **비교연산자**

  - 두 항을 비교하여 참이면 true, 거짓이면 false를 반황
  - `>`,`<`,`>=`,`<=`,`==`(동등),`===`(일치),`!=`,`!==`
  - 예시
    ```js
    var result = 1 > 2; // false
    var result = 10 <= 10; // true
    var result = 100 == "100"; // true
    // 동등 연산자는 타입과 상관없이 값만을 확인
    var result = 100 === "100"; // false
    // 일치연산자는 타입까지 확인. 타 언어는 기본적으로 타입까지 확인하기 때문에, js처럼 별도의 일치 연산자 존재X
    var result = 100 != 100; // false
    ```
  - 조건문에서 truthy/falsy의 기준
    - false,0,`''`,null,undefined -> **false**
    - 나머지는 true

  ※ 에러 보는 법 익숙해질 것 // 위치도 나오고 ctrl 누르고 클릭하면 바로 연결 됨

  ```bash
  ReferenceError: maxed is not defined
    at Object.<anonymous> (C:\Users\dlawl\likelion-bootcamp\febc13\01_js\JS\workspace\ch01\ex01-11-02.js:87:24)
  ```

- **일치 연산자**(`===`, identical)
  ※ `NaN`값은 어떤 값과 비교해도 false가 나옴
  심지어 `NaN`===`NaN` 도 false

  - `Object.is(a, b)` : **아래의 두 경우를 제외**하면 `a === b `와 동일한 기능
    `Object.is(0, -0) === false`
    `Object.is(NaN, NaN) === true`

- **동등 연산자**(`==`, equal)
- **논리 연산자**

  - `||` (OR, 논리합)
    - 일반적인 언어에서는 둘 중 하나라도 참이면 참을 반환하는 동작이지만 자바스크립트에서는 다음의 규칙을 따른다.
    - 앞의 값이 참이면 앞의 값 반환
    - 앞의 값이 거짓이면 뒤의 값 반환
    - var invalidId = (id.length < 4) || (id.length > 12);
  - `&&` (AND, 논리곱)
    - 일반적인 언어에서는 둘 다 참이면이면 참을 반환하는 동작이지만 자바스크립트에서는 다음의 규칙을 따른다.
    - 앞의 값이 참이면 뒤의 값 반환
    - 앞의 값이 거짓이면 앞의 값 반환
    - var validId = (id != null) && (id.length > 4);
  - `!` (NOT, 부정) : 참이면 거짓, 거짓이면 참 반환

  ※ let으로 변수 선언 시 중복X, var는 중복 가능

- **삼항 연산자** (조건부 연산자)

  - 조건에 따라 값을 선택하는 연산자
  - 조건 ? 참일 때의 값 : 거짓일 때의 값;

  ```js
  let num = 10;
  let result = num % 2 === 0 ? "짝수" : "홀수";
  console.log(result); // '짝수'
  let num = 15;
  let result = num % 2 === 0 ? "짝수" : "홀수";
  console.log(result); // '홀수'
  ```

---

- **연산자 우선순위** : 여러 연산자가 같이 사용될 때 어떤 연산을 먼저 수행할지를 결정하는 규칙
  - 자바스크립트의 연산자 우선순위 (아래로 갈수록 순위가 낮아짐)
    - 괄호 ()
    - 단항 연산자 `+`, `-`, `++`(전위형), `--`(전위형), `!`, `typeof`, `delete`
    - 산술 연산자 `\*`, `/`, `%`, `+`, `-`
    - 비교 연산자 `>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`
    - 논리 연산자 `&&` (AND), `||` (OR)
    - 조건부 (삼항) 연산자 `? :`
    - 대입 연산자 `=`, `+=`, `-=`, `\*=`, `/=`, `%=`
    - 증감 연산자(후위형) `++`, `--`

<br />
<br />

---

---

# 2025-04-01

**Javascript // IF문**

## 수업 내용

### IF문

- `let`과 `const`의 차이 : `let`은 재정의 가능, `const`는 재정의 불가능
- eslint 설치하면 js 오류 보여줌 // 나중에 할 예정
- **if문**

  - 지정한 조건식이 참(true)일 때 해당 구문 수행
  - 형식

    ```js
    if (조건식) {
      수행구문1;
      수행구문2;
    }

    /* ex1 */
    var num = 9;
    if (num < 10) {
      alert("num 값은 10보다 작습니다.");
    }

    /* ex2 */
    if (조건식) 수행구문;

    /* 이렇게 쓸 수도 있지만 권장하는 방식 아님. 여러 명령어가 있어도 첫번 째 명령어만 실행됨*/
    if (조건식)
      // 줄바꿈 들어가야되는데 프리티어때문에 안 돼서 걍 주석 추가함
      수행구문1;
    ```

  -**if~else문**

  - 지정한 조건식이 참일 경우와 거짓일 경우 각각 해당 구문 수행
  - 형식

    ```js
      if(조건식){
        수행구문1;
        수행구문2;
        ...
      }else{
        수행구문3;
        수행구문4;
        ...
      }
      /* ex */
      var num = 9;
      if(num % 2 == 0){
        alert("num 값은 짝수입니다.");
      }else{
        alert("num 값은 홀수입니다.");
      }

    ```

- `.toFixed()` 자릿수 잘라주는?
- shell 선택하는 셀렉트에서 javascript debug shell 열 수 있음. 여기서 파일 실행하면 브레이크포인트 잡아둔 곳에서 멈춤

  - 좌측 variables 보면 변수와 값 보여줌
  - 컨트롤러
    - Continue : 다음 브레이크포인트까지 진행
    - Step over : 다음 실행줄까지 진행
    - Step into : _함수 배우고 설명해주실 예정_
    - Step out : _함수 배우고 설명해주실 예정_
    - Restart : 재실행

  -**if~else if문**

  - 지정한 조건식이 참일 경우 해당 구문을 수행하고 거짓일 경우 else if 문의 조건식을 순차적으로 비교하여 참에 해당하는 구문 수행
  - 형식

    ```js
    if (조건식1) {
      수행구문1;
      수행구문2;
    } else if (조건식2) {
      수행구문3;
      수행구문4;
    } else if (조건식3) {
      수행구문5;
      수행구문6;
    } else {
      수행구문7;
      수행구문8;
    }

    /* ex */
    var age = 19;
    if (age >= 30) {
      alert("30대 이상입니다.");
    } else if (age >= 20) {
      alert("20대 입니다.");
    } else if (age >= 10) {
      alert("10대 입니다.");
    } else {
      alert("10살 미만입니다.");
    }
    ```

- 백준에서 조건문 파트 풀어보기
  <br />
  <br />

---

---

# 2025-04-02

**Javascript // Switch문, While문, For문**

## 수업 내용

### Switch문

- switch에 지정한 비교값과 매칭되는(===) case 구문 수행
- break 구문을 만날 때까지 또는 마지막 case 구문까지 실행
- 형식
  ```js
  switch (비교값) {
    case 값1:
      수행구문1;
    case 값2:
      수행구문2;
      break;
    case 값3:
      수행구문3;
      수행구문4;
    default:
      수행구문5;
  }
  ```

**※ 일반적으로 삼항연산자 사용 권장하지 않지만 react에서는 많이 사용 함**

### while문

- 지정한 조건식이 참일 경우 조건이 거짓이 될 때까지 해당 블럭을 반복하여 수행
- 형식

  ```js
    while(조건식){
      반복할 구문1;
      반복할 구문2;
    }

    /* ex */
    var sum = 0;
    var i = 1;
    while(i <= 10){
      sum += i;
      i++;
    }
    alert(sum);
  ```

### for문

- 지정한 횟수만큼 반복적인 작업을 할 경우 사용
- 형식
- 초기화: 조건식에 사용되는 변수를 초기화
- 조건식: 반복문을 실행할지 체크
- 증감식: 조건식에 사용되는 변수값을 증감

```javascript
for(초기화; 조건식; 증감식){
  반복할 구문1;
  반복할 구문2;
}

/* ex */
var sum = 0;
for(var i=1; i<=10; i++){
  sum += i;
}
alert(sum);
```

<br />
<br />

---

---

# 2025-04-03

**Javascript // break, continue, object, function**

## 수업 내용

### break

- 반복문이나 switch문을 즉시 종료
- break를 감싸고 있는 코드 블럭을 빠져나오고 코드 블럭 이후의 코드로 실행이 넘어감

### continue

- 반복문 내에서 남아있는 코드를 건너뛰고 다음 반복으로 실행이 넘어감
  **※ 가독성이 떨어져서 사용 권장하지 않음**

### object(=객체)

- key-value 쌍의 데이터 집합(속성, property)
- 속성의 값으로 모든 데이터 타입 지정 가능
- 값으로 함수가 지정된 속성을 메소드(method)라 함
- 여러개의 속성을 포함할 수 있음
- 객체 생성

  1. Object 생성자 함수로 생성 후 속성과 기능 부여. 객체의 속성과 기능에 접근할 때는 dot연산자(.)를 이용하거나 ['속성명'] 표기 사용

  ```javascript
  var foo = new Object();
  foo.name = 'kim';
  foo['age'] = 30;
  foo.job = 'student';
  foo['married'] = false;

  console.log(foo['name'], foo.age, foo.job, foo['married']);
  console.log(typeof foo, foo);

  kim 30 student false
  object {name: 'kim', age: 30, job: 'student', married: false}
  ```

  2. JSON(JavaScript Object Notation) 표기법 이용 : { 속성명1: 속성값1, 속성명2: 속성값2, ... }

  ```javascript
  var foo = {
    name: 'lee',
    age: 35,
    job: 'teacher',
    married: true
  };

  console.log(foo['name'], foo.age, foo.job, foo['married']);
  console.log(typeof foo, foo);

  lee 35 teacher true
  object {name: 'lee', age: 35, job: 'teacher', married: true}
  ```

### 함수

- 명령어의 묶음
- 특정 기능을 재사용 하고 싶을 때 작성
- 함수이름, 인자목록, 실행구문, 반환값으로 구성됨
- 형식
  ```javascript
    function 함수명(매개변수1, 매개변수2, ...){
      실행할 구문1;
      실행할 구문2;
      ......
      return 반환값;
    }
  ```
- 함수 사용(호출)
  ```javascript
    var result = 함수명(인자값1, 인자값2, ...);
  ```
- 2번 이상 반복 코드 사용된다 -> 그냥 함수로 만들어버려
  1번만 팔요한 기능이면 함수 필요X

- 함수를 위주로 만드는 언어를 절차지향 언어라고 함. 대표적인 예가 C 언어
- 디버그모드 컨트롤러

  - 좌측 variables 보면 변수와 값 보여줌
  - 컨트롤러
    - ▶️Continue : 다음 브레이크포인트까지 실행
    - Step over : 현재 줄을 실행하고 다음 줄로 이동 **함수 호출이 있어도 함수 내부로 들어가지 않고, 함수 전체를 한 줄처럼 처리**
    - Step into : 현재 줄이 함수 호출이라면, **그 함수 내부 코드로 들어가서 디버깅을 계속**
    - Step out : 현재 함수의 실행을 마치고, 그 함수를 호출한 상위 함수로 나감
    - Restart : 디버깅 세션을 다시 시작 (프로그램을 처음부터 다시 실행)
    - Stop : 디버깅을 중지하고 프로그램 실행 종료
    - Pause : (디버깅 중이 아닐 때는 보이지 않을 수 있음) 실행 중인 프로그램을 일시정지하고 현재 위치에서 멈춤

- 백준 for문 다풀기 // 주말동안 3단계까지는 다 풀어올 것

## 수업시간에 언급된, 찾아볼 내용

- 절차지향 언어 절차식 /객체식/함수형 언어
- typeof(##) typeof ##

  <br />
  <br />

---

---

# 2025-04-07

**Javascript // bigint, symbol,JSDoc**

## 수업 내용

### 브라우저에서 작동 순서

- HTML에 기재된 순서대로 위에서 아래로 실행되며, HTML 엔진이 작동하다가 script가 나오면 JS엔진이 작동함
- 동시에 작동하지 않음.크롬이 가지고 있는 JS엔진을 로컬에 가져온 게 node.js

### bigint : 큰 정수

- number의 범위: 약 ±1.8e+308
- number의 안전한 정수 범위: -2^53+1 ~ 2^53-1(약 9000조)
- number의 안전한 정수 범위보다 더 큰 정수도 표현 가능
- 값 뒤에 n을 붙이거나 BigInt() 함수의 인자로 값 지정
  ```javascript
  var big = BigInt(Number.MAX_SAFE_INTEGER) + 100n;
  ```

### symbol : 유일한 값

- 불변하고 고유함이 보장되는 값
- 주로 객체의 속성을 정의할때 다른 속성키와 충돌하지 않도록 만들 필요가 있을 때 사용

  ```javascript
  var s1 = Symbol("hello");
  var s2 = Symbol("hello");
  console.log(s1 === s2); // false
  ```

### function - JSDoc

- 자바스크립트에서 함수, 변수, 클래스 등에 문서화를 위한 주석을 다는 표준 형식
- 함수 만들고 나면 함수에 대해 설명하는 jsdoc 주석을 꼭 달아주는 게 좋다.
- 예시
  ```javascript
  /**
  * 표준 입력장치(console)에서 한 줄로 입력된 두 건의 데이터를 읽어서 숫자로 변환한 후
  * 객제에 a, b 속성으로 저장하여 반환한다.
  * @returns {object} a, b 속성에 입력값이 저장된 객체
  */
  function getData() {
    ...
    }
  ```
- 참고 링크 : https://poiemaweb.com/jsdoc-type-hint
- 이렇게 작성해두면 커서 올렸을 때 설명에 요 내용 나옴
- 주요 JSDoc 태그 목록
  | 태그 | 설명 |
  |------|------|
  | `@param` | 함수의 매개변수를 설명 형식: `@param {타입} 변수명 - 설명` |
  | `@returns` / `@return` | 함수의 반환값을 설명 형식: `@returns {타입} 설명` |
  | `@description` | 함수나 메서드의 설명을 자세히 적을 때 사용 |
  | `@type` | 변수의 타입을 명시할 때 사용 형식: `@type {타입}` |
  | `@typedef` | 사용자 정의 타입을 정의할 때 사용. 타입 안에 들어가는 각 속성의 이름, 타입, 설명은 `@property`로 설명|
  | `@callback` | 콜백 함수 타입을 정의할 때 사용 |
  | `@example` | 사용 예시를 작성할 때 사용 코드 블록으로 기재 |
  | `@throws` / `@exception` | 예외를 던지는 경우 해당 예외에 대해 설명 |
  | `@deprecated` | 더 이상 사용하지 않는 함수나 속성을 표시할 때 사용 |
  | `@see` | 관련된 함수나 문서를 참고하라고 연결할 때 사용 |
  | `@async` | 비동기 함수임을 명시할 때 사용 (`async function`) |

  <br />
  <br />

---

---

# 2025-04-08

**Javascript // 백준 문제풀이 및 객체**

## 수업 내용

### 문제풀이 시 필요한 method/함수

- 숫자로 만드는 방법 : `Number(값)` / `parseInt(값)` : 값을 정수로 만들어 줌
- `isNaN(값) ? A : B` -> 값이 NaN값인 지 보고 NaN이면 A를, 아니면 B를 반환함
- `toString()` vs `String()` 차이점 // 숫자를 문자로 바꿀 때는 뭘 쓰든 상관ㄴㄴ

  - **toString() 메서드** : 객체의 프로토타입 메서드. 대부분의 타입에서 사용할 수 있지만, null이나 undefined에서는 사용할 수 없음
  - **String() 함수** : 자바스크립트의 전역 함수. 내부적으로 `toString()` 또는 기타 변환 로직을 사용하지만, null이나 undefined도 안전하게 문자열로 변환
  - 정리
    | 구분 | `toString()` | `String()` |
    |-----------------|--------------------------------|----------------------------------------|
    | 타입 | 메서드 (객체의 메서드) | 전역 함수 |
    | null/undefined | ❌ 오류 발생 | ✅ "null", "undefined"로 변환 가능 |
    | 사용 방식 | `value.toString()` | `String(value)` |
    | 내부 동작 | 객체의 `toString()` 호출 | 내부적으로 `toString()` 또는 다른 변환 |
    | 권장 사용 상황 | 값이 명확할 때 | 값이 불확실하거나 안전한 변환이 필요할 때 |

- Todo Tree / Code Runner extension 설치
- 설문 피드백

  - 진도가 전공자/경험자 위주이다
  - 쉬운 예제 제공해달라
  - 개념을 더 설명해달라

### 객체 생성 방법

1. `new Object()` 생성자 함수로 객체 생성// `ex01-23-01.js` 참고

```javascript
  new Object() - 생성자 함수로 객체 생성
```

2. `JSON 표기법`: 리터럴 방식으로 객체 생성// `ex01-24.js` 참고

```javascript
const foo = {
  // JSON 표기법으로 객체 생성 및 값 정의
  name: "JSON핑",
  age: 7,
  job: "요정",
  married: true,
};
```

- 프로퍼티 꺼내는 방법 : `1. 대괄호` `2. .으로 연결`

  ```javascript
  console.log(foo["name"], foo["age"], foo.job, foo.married);
  ```

  - 객체 마침표(.) 접근법⇒ 키가 유효한 식별자(변수 이름 규칙)일 때만 사용 가능
  - 자바스크립트 유효한 식별자 기준
    1. 첫 글자가 문자 (a-z, A-Z) / 언더스코어 (\_) / 달러 기호 ($) 로 시작
    2. 특수문자를 제외한 문자, 숫자, \_, $ 사용 가능
    3. 예약어는 식별자로 불가능
       ※ 예약어 : 프로그래밍 언어에서 사용되거 있거나 사용될 예정이 단어
       _ex) await, break, class, if, let, function, new… 등등_

- 객체를 네트워크로 전송할 때 혹은 파일로 저장할 때는 꼭 문자열을 큰따옴표로 감싸야 함  
  : `JSON.stringfy()` 함수를 사용하면 객체를 JSON 형태의 문자열로 변환 가능

  ```javascript
  // ※ 함수가 있는 객체는 JSON.stringify()로 변환 시 함수가 제외 됨
  const strFoo = JSON.stringify(foo);
  console.log("strFoo", strFoo);

  // JSON 형태의 문자열을 객체로 변환 : 다시 객체로 되돌리고 싶을 때 사용
  const objFoo = JSON.parse(strFoo);
  ```

- JSDoc 참고 링크 : https://poiemaweb.com/jsdoc-type-hint
- 함수 MDN 링크 : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions

  <br />
  <br />

---

---

# 2025-04-09

**Javascript // 객체와 배열**

## 수업 내용

### 객체와 배열

- JSON 참고 링크 // https://www.json.org/json-ko.html
- 객체의 요소 : 프로퍼티
  배열의 요소 : 엘리먼트

- JSON 객체 네트워크로 전송하거나 파일로 저장할 때는 꼭 문자열을 큰 따옴표로 감싸야 함
  ```javascript
  const foo = {
    name: "JSON핑",
    age: 7,
    job: "요정",
    married: true,
  };
  ```
- `JSON.stringfy()` 함수를 사용하면 객체를 JSON 형태의 문자열로 변환 가능
  ※ 객체 안에 있는 함수의 경우 문자열 변환이 불가능하기 때문에 함수 부분을 제외하고 변환 됨

  ```javascript
  console.log(JSON.stringify(foo)); // string 형태의 {"name":"함수핑","age":6,"job":"마법사","married":false}
  console.log(JSON.stringify(foo, null, 2)); // 줄바꿈까지 넣을 수 있음

  const strFoo = JSON.stringify(foo); // 변수에 담기
  console.log(foo.job, strFoo.job); // 요정, undefined(변환 후에는 문자열이기 때문에 .으로 속성 못꺼냄)
  ```

- `JSON.parse()` 함수를 사용해서 문자열을 다시 객체로 복원 가능

  ```javascript
  const objFoo = JSON.parse(strFoo);
  ```

- `for in`구문

  - `for (var prop in obj){...};
    ```javascript
    for (var prop in foo) {
      console.log(prop + ": " + foo[prop]);
    }
    ```

- `for of`구문

  - `for (var prop of obj){...};

    ```javascript
    for (var elem of arr) {
      console.log(elem);
    }
    ```

- `delete` : 객체의 속성 삭제

  ```javascript
  const foo = {
    name: "푸푸핑",
    mainJob: "fairy",
  };
  console.log(foo.name, foo["mainJob"]); // 푸푸핑 fairy

  delete foo.mainJob;
  console.log(foo.name, foo["mainJob"]); // 푸푸핑 undefined
  ```

- 배열은 객체의 일종으로, 객체가 가지는 모든 특징을 갖고 있으며 추가로 `length`를 갖고 `push` 등의 특별한 기능을 쓸 수 있음
- **유사 배열 객체 (Like-Array Object)**
  : 배열과 비슷하게 사용할 수 있는 객체. 사용법을 보면 배열 같지만 실제 배열이 아닌 일반 객체인 것

  - 특징

    - index를 통한 접근: 배열처럼 index를 사용해서 각 요소에 접근 가능
    - length 속성: 배열처럼 length 속성이 있어서 for 구문을 이용하면 모든 요소 참조 가능
    - 배열 메서드 없음: forEach, map 등의 배열 메서드가 없음
    - arguments, NodeList, String 등의 내장 객체가 유사 배열 객체로 만들어져 있음

  - 주로 읽기를 목적으로 사용되는 객체일 경우(배열 요소를 제어하는 메서드가 필요 없음)
    배열보다 더 적은 비용으로 생성 가능
  - 배열로 변환 : Array.from(obj)을 사용하면 쉽게 배열로 변환 가능

### 2차원 배열

- 배열 안에 또 다른 배열들이 들어있는 배열
- 행렬이나 테이블 형식의 데이터를 표현할 수 있음

  <br />
  <br />

---

---

# 2025-04-10

**Javascript // 백준 문제 풀이 02-07 ~ 03-12**

## 수업 내용

### 문제 풀이 백준 02-07 ~ 03-12

- `for of`구문 관련
  - for of로 가져오는 element는 복사한 값으로, 해당 값에 재정의하겠다고 값을 넣어도 원본은 변함 없음
  - 예시
    ```javascript
    // 적용되지 않는 코드 : 배열의 값을 변경해야 할 때는 for...of 사용X. 요소 값만 꺼내 쓸 때 사용
    for (let elem of rowArr) {
      elem = isNaN(elem) ? elem : parseInt(elem);
    }
    ```
- `.repeat()` 함수

  - 반복할 대상에 붙여서 사용, 괄호 안에는 반복횟수 입력
  - 예시
    ```javascript
    const longTimes = bytes / 4;
    result = "long ".repeat(longTimes);
    ```

- 시간 측정 함수

  - `console.time("Single Logs");` // 시간 측정 시작
  - `console.timeEnd("Single Logs");` // 시간 측정 종료
    ※ 괄호 안의 내용은 임의로 지정. 시작과 끝만 동일하게 맞춰주면 됨

  <br />
  <br />

---

---

# 2025-04-11

**Javascript // 백준 문제풀이, 이차배열, 함수, 메모리 관리, 변수 스코프**

## 수업 내용

### 문제 풀이 : 백준 04-05

- 배열 함수들

  - `.join()` : 배열 사이에 괄호 안의 값을 넣어서 문자열 만들어줌
    ```**javascript**
    ["a", "b", "c"].join(); // 'a,b,c'
    ["a", "b", "c"].join("-"); // 'a-b-c'
    [1, 2, 3].join(" / "); // '1 / 2 / 3'
    ```
  - `.split()` : 문자열을 배열로 만들고 싶은 경우 사용

    ```javascript
    "a,b,c".split(","); // ['a', 'b', 'c']
    "hello world".split(" "); // ['hello', 'world']
    "abc".split(""); // ['a', 'b', 'c']
    ```

  - `splice`,`slice` 는 배열의 일부만 잘라서 쓸 때 사용

- 배열을 변수에 넣는 경우, 배열의 주소값만 가지는 것이기 때문에 배열의 값이 바뀌더라도 const를 써도 문제 없다
  (주소는 안 바뀌기 때문에)
  => const는 변수 자체의 재할당을 막지만, 참조하고 있는 객체(배열이나 객체 등)의 내부 값은 변경이 가능

  ```javascript
  const result = [];
  for (let i = 0; i <= 5; i++) {
    result.push(0);
  }

  result = [1, 2]; // 단 이렇게 배열 자체를 재정의 하는 건 안됨!!
  ```

### 이차배열 : ex01-29-02.js 참고

### 함수: ex01-37.js

- 참조형 데이터 타입의 특징

  - **기본 데이터 타입**은 실제 데이터를 저장하고 다룸
    // 함수 호출 방식: 값에 의한 호출 (Call by Value)

  - **참조형 데이터 타입**은 실제 데이터가 있는 위치의 주소를 저장하고 다룸
    // 함수 호출 방식: 참조에 의한 호출 (Call by Reference)

  ```javascript
  /**
   * 2개의 인자값을 받아서 각각 10을 더하여 반환해주는 함수
   */
  function add10(data1, data2) {
    data1 += 10;
    data2[0] += 10;
    console.log(`함수 내부 // d1: ${data1}, d2: ${data2[0]}`); // 90 90
  }

  let d1 = 80; // number
  let d2 = [80]; // array(object)

  console.log(`함수 호출 이전 // d1: ${d1},  d2: ${d2[0]}`); // 80 80
  add10(d1, d2);

  console.log(`함수 호출 이후 // d1: ${d1},  d2: ${d2[0]}`); // 80 90
  //  => 값 타입(d1)은 복사돼서 안 바뀜, 참조 타입(d2)은 주소 공유하니까 직접 값이 바뀜
  ```

### javascript의 메모리 관리: ex01-37-02.js

- js 엔진은 `Call Stack` 과 `Memory Heap` 으로 메모리 관리
- js는 단일 스레드 (single thread) 프로그래밍 언어 : Call Stack이 하나. 멀티X 한 번에 하나씩 처리
- stack안에 call stack이라는 함수 저장정보가 저장되는 단위가 있고 그 안에 변수들이 저장 됨
- heap 안에 함수, 객체가 저장되고 함수를 실행하면 stack -> heap을 거쳐서 실행 됨

- 참고 링크 : https://charming-kyu.tistory.com/19

### 변수 스코프: ex01-38.js

```javascript
var age = 20; // 전역 변수
year = 10; // 전역 변수
function getAge(year) {
  // 지역 변수
  var age = 30; // 지역 변수
  myAge = age + year; // 함수 내에 선언 없이 쓰는 변수 = 전역변수 -> 사용하면 안되는 코드. 전역변수 사용 지양!!!!
  // 전역변수 꼭 써야 한다면 앞에 window. 생략하지말고 꼭 붙여서 전역변수인 티를 낼 것
  alert(myAge);
  console.log(myAge);
}
```

- 전역 변수

  - 함수 외부에서 선언한 변수
  - 스크립트 내 어디에서나 접근 가능
  - 페이지가 로딩될 때 한번 생성하여
  - 값이 유지됨
  - window 객체의 속성으로 지정됨

- 지역 변수

  - 함수 내부에서 선언한 변수
  - 해당 함수 안에서만 접근 가능
  - 함수가 호출될 때마다 새로 생성하여 값이 초기화
  - **함수 내부에서 선언하지 않고 바로 사용하는 변수는 전역 변수로 동작**

- 변수 우선순위

  - 변수는 가까운 곳부터 찾는다.
  - 즉 지역변수 영역에서 먼저 찾고 없을 경우 전역변수에서 찾는다.

- 지역변수의 유효범위

  - 대부분의 언어에서는 선언한 변수가 블록 단위의 유효범위를 갖지만
  - 자바스크립트에서는 var로 선언한 변수가 함수 단위의 유효범위를 갖는다.

## 회고 : 멀티스레드와 싱글스레드의 차이

- **스레드(thread)** : 프로그램의 실행 흐름
  - 멀티스레드는 공유 자원을 수정하는 작업을 동시에 못하도록 언어적인 장치를 가지고 있음(=스레드 동기화)
    자바는 syncronized라는 블럭을 만들어서 동시에 접근 못하도록 함
  - 자바스크립트는 싱글스레드 언어임
  - node.js의 장점 중 하나가 싱글스레드지만 멀티스레드처럼 작동하는 것임 (※ 웹워커를 쓰면 js도 멀티스레드로 쓸 수 있음)
    ※ **웹 워커(Web Worker)**
    : JavaScript에서 백그라운드에서 코드 실행을 가능하게 해주는 기능. 메인 스레드와는 별도로 작동하는 백그라운드 스레드

<br />
<br />

---

---

# 2025-04-14

**Javascript // 클라이언트 사이드 js(DOM, Node)**

## 수업 내용

### 피드백 정리

- 코드에 대한 세세한 설명 필요
  - 코드에 주석을 자세히 추가
- 자세한 강의 자료 필요
  - 다음 사이트 참고(PPT에 링크 추가)
    - https://ko.javascript.info/
    - https://codingeverybody.kr/category/javascript/
    - https://poiemaweb.com/
- 라운지에 올라온 질문에 대한 답변
  - 매일 질문 스레드를 따로 생성할 테니 답변이 필요한 질문은 스레드에 올릴것
- 나중에 배울꺼다 하지말고 설명을 하거나 언급을 말거나
  - 수업 흐름상 어쩔수 없이 언급을 해야 하는 부분에는 TODO 추가
- 문제 풀이 결과 공개 부담됨
  - 문제 풀이 종료 시간 공지
  - 지목하지 않고 자발적으로 공개할 사람만 공개
- 중간 중간 코드 공유
  - 실습 시작, 종료시 코드 푸시
- 백준 문제 풀이
  - 질의응답에 올리면 회고시간에 스터디룸에서 따로 풀이 진행
- 다음날 배울 내용에 대한 언급
- 어떤 주제에 대해 중요하지 않다고 하면서 오래 설명할 때가 있음
  - 난이도 있는 질문은 모아서 회고 시간에 설명
- 화면 공유 놓치지 않도록 더 신경

### 웹 브라우저에서 작동하는 자바스크립트 환경

- **ECMAScript**: 자바스크립트 언어에 대한 표준

  - https://ecma-international.org/publications-and-standards/standards/ecma-262

- **DOM(Document Object Model)**: 웹페이지 제어를 위한 표준
  - 페이지 안 쪽을 제어하기 위한 부분
  - https://dom.spec.whatwg.org
  - window.document 등
  - Event
- **BOM(Browser Object Model)**: 웹페이지 외부의 브라우저 기능 제어를 위한 표준
  - 위쪽 브라우저 바 제어하기 위한 부분
  - HTML 표준: https://html.spec.whatwg.org
    - window.navigator: 브라우저와 운영체제에 대한 정보 제공
    - window.location: 현재 페이지의 URL에 대한 제어(읽기, 수정)
    - window.history: 브라우저의 과거 페이지 이동 정보에 대한 제어(읽기, 수정)
    - alert, setTimeout 등
- **Web APIs:** 브라우저가 제공하는 웹 기능을 위한 표준 (=HTML5)
  - https://spec.whatwg.org
  - XMLHttpRequest: 서버와 통신에 사용되는 객체(Ajax)
  - Web Storage, Notifications API, WebSocket 등

### 노드(Node)

- DOM 트리구조는 모든 구성원이 각각의 객체로 인식되며 이러한 객체 하나하나를 노드라고 함
- 노드의 종류(주로 사용되는 노드)

  - 문서노드(document node)
  - 요소노드(element node)
  - 속성노드(attribute node)
  - 텍스트노드(text node)

- HTML안의 요소 // js 파싱과정에서 객체(속성&메소드)가 되는 애들

  - 태그로 되어있는 애들 = **엘리먼트 노드**
  - 태그 안쪽의 텍스트 = **텍스트 노드**
  - 태그 안의 id/class/속성등 = **어트리뷰트 노드**(=속성 노드)

- HTML 문서 구조 그리기 (동기분 거 복붙해옴)

  ```html
  <!DOCTYPE html>
  <html lang="ko-KR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Counter</title>
    </head>
    <body>
      <header>
        <h1>Counter</h1>
      </header>
      <div id="container">
        <span>0</span>
        <button>+</button>
      </div>

      <script>
        // id가 "container"인 요소를 찾기
        const container = document.getElementById("container");
        console.log(container);
      </script>
    </body>
  </html>
  ```

  ```
  html
  ├── head
  │   └── title
  │       └── "Counter" (텍스트 노드)
  └── body
      ├── header
      │   └── h1
      │       └── "Counter" (텍스트 노드)
      └── div (id="container")
          ├── span
          │   └── "0" (텍스트 노드)
          └── button
              └── "+" (텍스트 노드)
  ```

### 다양한 노드 선택 방법

- 태그의 id를 이용하여 노드 찾기
  - `document.getElementById(id)` : id 속성값에 해당하는 노드객체를 반환
  - 예시
    ```javascript
    const purchases = document.getElementById("purchases");
    ```
- 태그명을 이용하여 노드 찾기

  - `요소노드.getElementsByTagName(tagName)` : 지정한 요소노드의 하위 모든 요소를 대상으로 태그명(tagName)에 해당하는 요소노드를 배열로 반환
    (tagName에 `*`을 지정하면 모든 요소를 배열로 반환)
  - 예시
    ```javascript
    const liList = purchases.getElementsByTagName("li");
    ```

- class 속성으로 노드 찾기

  - `document.getElementsByClassName(className)` : class 속성값이 className인 요소 노드의 목록을 반환
  - 예시
    ```javascript
    const purchases = document.getElementsByClassName("list")[0];
    ```

- CSS 셀렉터로 노드 찾기
  - Selector: CSS에서 사용하는 노드 선택 구문
    https://www.w3.org/TR/css3-selectors/
  - `document.querySelector(selector)` : 지정한 selector 구문에 매칭되는 노드 목록 중 첫번째 노드를 반환
  - `document.querySelectorAll(selector)` : 지정한 selector 구문에 매칭되는 노드 목록을 반환
  - 예시
    ```javascript
    var purchases = document.querySelector(".list");
    var purchases = document.querySelector("#purchases");
    var purchases = document.querySelectorAll("ul")[0];
    ```
    <br />
    <br />

---

---

# 2025-04-15

**Javascript // **

## 수업 내용

###

    <br />
    <br />

---

---

# 2025-04-16

**Javascript // **

## 수업 내용

###

    <br />
    <br />

---

---

# 2025-04-17

**Javascript // **

## 수업 내용

###

선택자 기준
:last-child 부모의 진짜 마지막 자식 부모의 마지막 요소가 li여야 함
:last-of-type 같은 태그 중에서 마지막 li들 중 마지막이면 됨

자바스크립트로 cllass 접근
contextmenu -> 우클릭 이벤트

target : 실제로 이벤트가 발생한 요소
currentTarget : 그 이벤트를 처리중인 요소

버블링
캡쳐링

    <br />
    <br />

---

---

# 2025-04-21

**Javascript // 일급 객체, 함수 생성, 호이스팅**

## 수업 내용

### 일급 객체(First-class object)

- 변수, 배열 엘리먼트, 다른 객체의 프로퍼티에 할당될 수 있다.
- 함수의 인자로 전달될 수 있다.
- 함수의 결과 값으로 반환될 수 있다.
- 리터럴로 생성될 수 있다.
- 동적으로 생성된 프로퍼티를 가질 수 있다.

함수 생성

화살표 함수
const add = x => x + 10; //여기서 매개변수가 없으면 const add = () => return 10; 일케

함수 호이스팅
선언문 형태로 정의한 함수는 호출 위치보다 아래에 작성돼도 작동한다
js앤잔이 실행 전에 호이스팅 단계를 거치는데 이 때 선언문 형태의 함수가 생성되기 때문!

표현식 형태(변수로 선언)
arguments까지 함

<br />
<br />

---

---

# 2025-04-22

**Javascript // 함수 호출, this**

## 수업 내용

### 함수 호출

1.  **함수 이름으로 호출** (:일반적인 함수 호출 방법)

    - `함수명()`
    - `this` = window 객체
      ※ window 객체는 어디서나 참조 가능하므로 굳이 this를 사용할 필요 없음
    - 호출 예시

      ```javascript
      function f1() {
        console.log(this);
        // 아래와 같다.
        // this.console.log(this);
        // window.console.log(this);
      }
      const f2 = function () {
        console.log(this);
      };

      f1();
      f2();
      console.log(this); // window
      ```

2.  **메서드로 호출** (:객체에 정의된 메서드를 호출할 때)

    - `객체.메서드명()`
    - `this` = 메서드를 정의한 객체
    - 호출 예시

      ```javascript
      window.name = "global"; // window, 브라우저가 가지고 있는 전역 객체 -> Node.js에서 실행 불가
      global.name = "global"; // global, Node.js가 가지고 있는 전역 객체 -> 웹브라우저에서 실행 불가
      globalThis.name = "global"; // 브라우저는 window, Node.js는 global 객체를 가리킴 -> 둘 다 실행 가능!

      const getPingName = function () {
        return this.name;
      };
      const baro = { name: "바로핑", age: 11, getName: getPingName };
      const rara = { name: "라라핑", age: 9, getName: getPingName };
      console.log(baro.age, baro.getName()); // baro
      console.log(rara.age, rara.getName()); // rara
      ```

    - 화살표 함수의 `this`는 상위 Scope의 this를 찾는 점 주의!

3.  **apply(), call() 사용하여 호출** (:함수에 정의된 메서드)

    - `함수명.apply(), 함수명.call()` 형태로 호출
    - `this` = apply(), call() 메소드의 첫번째 인자로 전달되는 객체
    - this를 명시적으로 지정할 수 있음
    - 각 메서드의 매개변수

      - apply(p1, p2) : 첫 번째 매개변수(p1)에는 this로 사용할 객체를 전달, 두 번째 매개변수(p2)에는 함수에 전달할 인자값 배열
      - call(p1, p2, p3, ...) : 첫 번째 매개변수(p1)에는 this로 사용할 객체를 전달, 두 번째 이후의 매개변수(p2, p3, …)에는 함수에 전달할 인자값을 차례대로 지정

    - 호출 예시

      ```javascript
      function add(x, y) {
        console.log(this);
        return x + y;
      }
      console.log(add(10, 20)); // 30, this = window
      console.log(add.call({ name: "call" }, 30, 40)); // 70, this = { name: "call" }
      console.log(add.apply({ name: "apply" }, [50, 60])); // 110, this = { name: "apply" }
      // apply는 인자 2개 : 2번째 인자는 배열로 전달
      ```

4.  **생성자 함수(객체지향 언어의 클래스와 비슷) 호출** (:함수를 생성자로 사용할 경우)

    - `new 함수명()` 형태로 호출
    - `this` = 생성자를 통해 생성된 객체
    - 생성자로 호출될 때의 내부 동작

      1. 비어있는 객체를 새로 생성
      2. 새로 생성된 객체는 this 매개변수로 생성자 함수에 전달
      3. 명시적으로 반환하는 객체가 없다면 생성된 객체를 반환
      4. 객체지향 프로그램의 new 연산자와 비슷한 동작

    - 생성자 함수로 만들어진 객체를 `Instance`라고 함
    - 생성자를 작성할 때 고려해야 할 것들

      - 일반 함수처럼 호출할 수 있지만, 이럴 경우 생성자 내부의 this는 window 객체를 가리키므로 객체에 종속적인 값을 지정할 수 없으므로 의미가 없다.
      - _명명(naming) 규칙_
        - 일반 함수: 작업할 동작을 나타내는 동사로 이름 짓고 소문자로 시작
        - 생성자: 생성할 객체를 나타내는 명사로 이름 짓고 대문자로 시작

    - 호출 예시

    ```javascript
    const getPingName = function () {
      return this.name;
    };
    // 객체를 생성해서 반환하는 함수(생성자 함수) : new 연산자와 함께 사용해야 함
    function Ping(name, age) {
      this.age = age;
      this.name = name;
      this.getName = function () {
        return this.name;
      };
    }

    //new의 동작
    // 1. 빈 객체를 참조하는 this 생성
    // 2. this를 생성자 함수에 전달
    // 3.생성자 함수가 아무것도 리턴하지 않는다면 this를 자동으로 리턴
    const baro = new Ping("바로핑", 8);

    baro.age++;
    baro.height = 120;

    console.log(baro.age, baro.getName(), baro.height); // getName()의 this는 baro
    console.log(getPingName(), getPingName.call(baro)); // this = window, this = baro
    ```

- **※ 요약 : 함수 호출 방법에 따른 this가 가리키는 것**
  1. 그냥 함수 이름으로 부르기 -> **window**
  2. `.~`로 부르기 -> **해당 객체**
  3. `.call()`, `.apply()` -> **내가 지정한**(괄호에 넣은) **객체**
  4. `new 함수이름`(생성자 함수)로 부른 거 : **빈 객체**

### 자바스크립트의 생성자 함수들

    ```javascript
    // Function
    let f = new Function("x", "y", "return x + y;");
    let f = (x, y) => {
      return x + y;
    };

    // Object
    let obj = new Object();
    let obj = {};

    // String, Number, Boolean
    const name = new String('김철수');
    const age = new Number(30);
    const male = new Boolean(true);

    // Array
    let arr = new Array();
    let arr = [];

    // Date
    const date = new Date();
    ```

### 정리

1. **함**수는 **곧** **객**체다 : 함수는 속성과 method를 가질 수 있음

- `console.dir(함수명)` 콘솔에서 찍어봤을 때 `Prototype`이라는 항목에서 함수의 메소드를 확인할 수 있음

2. **배**열은 **곧** 체다 : 배열도 같은 방식으로 배열의 메소드 확인 가능
3. **디**스는 **곧** **거**시기다 : this가 가리키는 것은 호출 될 때마다 바뀐다

<br />
<br />

---

---

# 2025-04-23

**Javascript // **

## 수업 내용

### 익명 함수 (Anonymous function)

- 익명 함수의 사용처
  1. 함수의 이름 대신 변수명, 속성명으로 사용할 경우
     - 함수를 변수에 저장
     - 객체의 메서드로 지정
  2. 함수를 인자값으로 전달할 경우
     - 전달한 인자값은 호출되는 함수 내부에서 적절한 매개변수를 지정해서 사용

### 콜백 함수

### 순수 함수오 ㅏ고차 함수

### Memoization

순수함수일 때 메모이제이션 사용 가능

리액트는 처음 들어가면 화면 구성하는 모든 요소 다 받고 js파일들 다 받아서 오래 걸림!
서버사이드 렌더링을 사용해서 첫 페이지를 빨리 보여주려고 나온 게 Next.js임

### 프로토 타입

```

```

<br />
<br />

---

---

# 2025-04-24

**Javascript // **

## 수업 내용

### 상속
- 상속 받는다 = 확장한다라고도 표현할 수 있음





UNPKG : https://unpkg.com/ 들어가서 주소 위에 lodash 붙인 후 엔터
나오는 화면이 최신 버전 로데쉬 라이브러리. 주소 복사 후 html 파일에 script 태그 src로 넣기 : 라이브러리 사용 가능


내일 시험 : 10문제, 40점 만점, 코딩 문제 있음 // 시스템상 문제 정답 처리 어려우니 직접 채점하실 예정 
            오픈북 : 소스코드, 책, 검색 가능. AI는 안됨       