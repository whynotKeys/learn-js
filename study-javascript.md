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

**Javascript // 이벤트 등록, 노드 생성/삽입/삭제/복사**

## 수업 내용

### 이벤트(event)

- 이벤트란?

  - 브라우저에서 어떤 일이 일어 났음을 알려주는 신호
  - 클릭, 키보드 입력, 마우스 이동, 스크롤 등의 작업
  - 주로 요소 노드에서 발생

- 이벤트 핸들러(event handler)

  - 특정 이벤트가 발생했을 때 실행되는 함수
  - 이벤트가 발생하는 대상에 이벤트와 이벤트 핸들러를 등록해서 이벤트 처리

- 대표적인 이벤트 종류

  - 마우스 이벤트 : `click`, `dblclick`, `mousemove`, `mouseover/mouseout`, `mousedown/mouseup`, `contextmenu`
  - 키보드 이벤트 : `keydown`/`keyup`
  - 폼 이벤트 : `focus`/`blur`, `input`, `change`, `submit`
  - 스크롤 이벤트 : `scroll`
  - 문서 로딩 이벤트 : `load`, `DOMContentLoaded`, `beforeunload`/`unload`

- 이벤트 핸들러 등록 방법

  1. DOM 프로퍼티에 할당 (: DOM Level 0 방식 (HTML 표준))

  - 요소 노드의 `on<event>` 속성에 이벤트 핸들러를 등록하면 `<event>`가 발생했을 때 등록한 핸들러가 호출됨
  - 중복으로 이벤트 설정 시 더 최근에(아래에) 등록한 것만 작동!
  - 예시

  ```html
  <button>눌러봐</button>
  ```

  ```javascript
  const btn = document.querySelector("button");
  btn.onclick = function () {
    console.log("1. 왜눌렀어잉");
  };
  btn.onclick = function () {
    console.log("2. 누르지말지");
  };
  // 2.누르지말지 만 콘솔에 표시 됨
  ```

  2. HTML 인라인 방식 (: DOM Level 0 방식 (HTML 표준))

  - HTML 태그의 `on<event>` 속성에 `<event>`가 발생 했을 때 실행할 코드 지정
    (`onclick`, `onmousemove`, `onkeydown` 등)
  - 브라우저는 실행할 코드로 구성된 이벤트 핸들러를 만들어서 요소 노드의 `on<event>` 속성에 등록
  - 예시

  ```html
  <button onclick="console.log('눌렀겠다?');">눌러볼까말까볼까말까</button>
  ```

  3. `elem.addEventListener(event, handler, [useCapture])` 사용 (: DOM Level 2 방식 (DOM 표준))

  - elem 요소노드에 event 발생시 실행할 handler 함수를 등록
  - 중복으로 이벤트 설정 시 둘 다 작동
  - 괄호 안에 들어갈 매개변수
    - _event_: 이벤트 이름 (click, mousemove, keydown 등)
    - _handler_: 핸들러 함수
    - *useCaptur*e: 캡처링 단계의 이벤트 캐치 여부. 기본은 false이고 버블링 단계의 이벤트를 캐치
  - 이벤트 핸들러 삭제 방법 : `elem.removeEventListener(event, handler, [useCapture])`
    - elem 요소노드에 event 발생시 실행할 handler 함수를 제거  
      핸들러를 등록할 때 지정했던 매개변수와 동일한 인자값의 핸들러가 삭제됨
  - 예시

  ```html
  <button>눌러봐</button>
  ```

  ```javascript
  const btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    console.log("3. 누름누름");
  });

  btn.addEventListener("click", handleclick); // () 없는 이유 : 호출하는 거 아니라서

  setTimeout(function () {
    btn.removeEventListener("click", handleclick); // handler 함수 제거
  }, 1000 * 2);

  function handleclick() {
    console.log("나는 핸들클릭 함수!");
  }
  ```

### 노드 생성/삽입/삭제/복사

- 노드 생성
  - document 객체의 createXxx() 메소드를 이용
    | 메소드 | 설명 |
    |:------|:-----|
    | `createElement(nodeName)` | 지정한 태그명으로 요소 노드 생성 |
    | `createTextNode(nodeValue)` | 지정한 내용으로 텍스트 노드 생성 |
    | `createAttribute(attributeName)` | 지정한 이름으로 속성 노드 생성 |
  - 예시
  ```javascript
  const newLiNode = document.createElement("li");
  const newTextNode = document.createTextNode("우유");
  ```
- 노드 추가
  - 요소노드.appendChild(childNode) : 지정한 노드를(childNode) 요소노드의 마지막 자식노드로 추가
  - 예시
  ```javascript
  const newLiNode = document.createElement("li"); // 리스트 엘리먼트 생성
  const newTextNode = document.createTextNode("우유"); // 우유 텍스트 엘리먼트 생성
  newLiNode.appendChild(newTextNode); // 리스트 엘리먼트의 자식 요소로 텍스트 엘리먼트를 추가
  ```
- 노드 삽입
  - 요소노드.insertBefore(newNode, targetNode) : 지정한 노드를(newNode) targetNode 앞에 삽입
  - 예시
  ```javascript
  const purchases = document.getElementById("purchases"); // ID가 purchases인 요소 가져옴
  purchases.insertBefore(newLiNode, purchases.firstChild); // 가져온 요소 안의 타켓 요소 앞에 새 요소 삽입
  // 부모요소.insertBefort(새 요소, 새 요소의 뒤에 올 요소)
  ```
- 노드 삭제
  - 요소노드.removeChild(childNode) : 지정한 자식 노드를(childNode) 삭제
  - 요소노드.remove() : 자기자신을 삭제
  - 예시
  ```javascript
  const purchases = document.getElementById("purchases"); // ID가 purchases인 요소 가져옴
  purchases.removeChild(purchases.firstElementChild); // purchases의 첫번 째 자식 노드(purchases.firstElementChild)를 삭제
  purchases.firstElementChild.remove();
  ```
- 노드 복사
  - 노드.cloneNode(haveChild) : 지정한 노드를 복사,
    // `haveChild`가 `true`이면 하위 모든 노드를 같이 복사하고 `false(기본값)`이면 지정 노드만 복사
  - 예시
  ```javascript
  const purchases = document.getElementById("purchases"); // ID가 purchases인 요소 가져옴
  const cloneLi = purchases.firstChild.cloneNode(true); // purchases 하위 첫 자식과 그 하위의 모든 요소 복사
  purchases.appendChild(cloneLi); // 복사한 노드를 추가
  ```
    <br />
    <br />

---

---

# 2025-04-16

**Javascript // todoList 구현**

## 수업 내용

### addEventListener 사용 시 `load`와 `DOMContentLoaded`의 차이

```javascript
// load : HTML 문서 로딩 완료(= DOM 객체 생성 완료)
//        이미지/css/js파일 같은 외부 리소스까지 모두 로딩 된 후 발생하는 이벤트
window.addEventListener("load", function () {});
// 모든 리소스가 완전히 로드된 후 실행할 코드

// DOMContentLoaded : HTML 문서 로딩 완료(= DOM 객체 생성 완료) 후에 발생하는 이벤트
document.addEventListener("DOMContentLoaded", function () {});
// DOM 트리가 완성되었을 때 실행할 코드
```

### 다양한 방식으로 DOM 요소를 만들고 접근 (feat. ex05-05.html)

```html
<div class="todoinput">
  <input type="text" autofocus onkeyup="handleKeyup(event)" />
  <!--keyup이벤트-->
  <button type="button" onclick="handleAdd()">추가</button>
</div>
```

```javascript
const liElem = document.createElement("li"); // <li> 엘리먼트 요소 생성
const noElem = document.createElement("span"); // <span> 엘리먼트 요소 생성

const noTxt = document.createTextNode(item.no); // 텍스트 요소 생성 : 3

noElem.appendChild(noTxt); // <span>3</span> 엘리먼트 요소의 자식으로 텍스트 요소 넣어서 조립
liElem.appendChild(noElem); // <li><span>3</span></li> 엘리먼트 요소의 자식으로 엘리먼트 요소 넣어서 조립

liElem.setAttribute("type", "button"); // 속성 더하는 메소드
liElem.setAttribute("tabindex", 0); // 속성 더하는 메소드, 탭 포커싱 추가

//삭제 버튼에 클릭 이벤트 핸들러 추가 (삭제방법1)
buttonElem.addEventListener("click", function (event) {
  const btn = event.target; // click event가 발생한 요소 (button)
  // closest = btn의 조상 중 기재한 셀렉터와 일치하는 가장 가까운 조상 찾기
  const liNode = btn.closest("li");
  liNode.firstChild.remove(); // 지정 요소의 첫번 쨰 자식 요소 삭제하기
});

function handleAdd() {
  // querySeletor로 요소 찾기 : todoinput class 안의 input 요소
  const inputElem = document.querySelector(".todoinput > input");

  if (inputElem.value.trim() !== "") {
    addItem(" " + inputElem.value);
    inputElem.value = ""; // 인풋 clear
    inputElem.focus(); // 등록 후에 포커스 입력창에 가도록 설정
  }
}

function deleteItem(no) {
  const targetLi = document.querySelector(`.todolist > li[data-no="${no}"]`); // 특정 속성값을 가진 요소 찾기
  targetLi.remove();
}
```

    <br />
    <br />

---

---

# 2025-04-17

**Javascript // HTML 속성 접근, style/class 다루기, 이벤트, 버블링과 캡처링**

## 수업 내용

###

```javascript
const titleEl = targetLi.querySelector("span:last-of-type"); // span인 자식들 중 마지막
```

선택자 기준
:last-child 부모의 진짜 마지막 자식 부모의 마지막 요소가 li여야 함
:last-of-type 같은 태그 중에서 마지막 li들 중 마지막이면 됨

자바스크립트로 class 접근
contextmenu -> 우클릭 이벤트

target : 실제로 이벤트가 발생한 요소
currentTarget : 그 이벤트를 처리중인 요소
PPT05 p.31~
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

<br />
<br />

---

---

# 2025-04-25

**Javascript // **
**TypeScript // **

## 수업 내용

### // mtlib.js

리액트에 memoization 관련 기능 3가지 있음

### // 즉시실행함수(IIFE)

- 함수를 괄호로 감싸tj 끝에 ()를 붙여서 실행 후 바로 없어지도록 함 : 메모리 절약 가능
- 변수도 함수 내에서만 사용하므로 바깥의 변수와 충돌 X 독립적인 공간 확보 가능.
- 특정 코드 블럭을 독립 모듈로 사용하느 효과
- 라이브러리 래핑
  - ((some) => {})(Some.long.reference.to.c...) => 긴 이름을 즉시실행 함수로 감싸고 매개변수를 짧은 변수로 대테
- 루프에서 사용

forEach() //

### TypeScript

`$tsc --watch` 하면 ts파일 수정 후 저장 시 알아서 컴파일!!
tuple : 길이와 타입이 정해진 타입

<br />
<br />

---

---

# 2025-04-28

**TypeScript // 선택적 파라미터, 유니언 타입, 타입 별칭, 인터섹션 타입, 인터페이스**

## 수업 내용

- 수업 파일 세팅 (파일 가져오기, tsconfig.json 위치 변경(JS->workspace)readonly include/exclude 추가)
- 휴일동안 과제 : 여태했던 예제들 ts로 바꿔서 만들어보기

### 선택적 파라미터 (optional parameter)

- js에서는 `함수를 정의할 때 넣은 매개변수 개수`와 `실행 시 넣은 인자 개수`가 달라도 에러나지 않지만 **ts는 에러 남**
  : 선택적 파라미터를 사용해서 인자가 있으면 가져오고 없으면 없는 채로 실행되도록 구현
- optional 매개변수는 뒤에 `?`를 붙여서 표시할 수 있음
- 예시
  ```typescript
  function user(name: string, age?: number) {
    console.log(name, age);
  }
  user("하루", 5);
  user("이틀"); // 선택적 파라미터 사용하지 않으면 에러 발생
  ```

### 유니언 타입 (union type)

- ts는 매개변수의 타입을 지정하기 때문에 하나의 매개변수에 다양한 타입의 값이 들어올 경우 에러 발생
- 여러 종류의 타입을 허용하기 위해 `|`(OR연산자)로 연결해서 여러 타입을 기재하는 게 유니언 타입
- 모든 타입을 허용하는 `any`타입과 달리 유니언 타입은 `|` 연산자로 연결된 타입 중 하나만을 허용
- 예시

  ```typescript
  // print함수의 msg 매개변수에 string, number, boolean 타입을 인자로 넣을 수 있음
  function print(msg: string | number | boolean) {
    if (typeof msg === "string") {
      // 타입 가드 : string일 경우
      console.log(`${msg} 글자수: ${msg.length}`);
    } else if (typeof msg === "number") {
      // 타입 가드 : number 경우
      console.log(`${msg} + 10 = ${msg + 10}`);
    } else {
      // 타입 가드 : boolean일 경우
      console.log(`${msg}: ${msg ? "참" : "거짓"}`);
    }
  }

  print("world");
  print(200);
  print(false);
  ```

### 타입 별칭(type alias)

- 타입을 변수에 저장해서 사용하는 방법
- 가독성 및 편의성을 위해, 유니언 타입 같이 복잡하고 긴 타입을 바로 쓰지 않고 별칭을 붙여서 사용
- type 키워드로 선언하는 사용자 정의 타입
  - 동일한 이름으로 중복 선언 불가
  - JS로 컴파일 되면 제거됨
  - 관례적인 명명 규칙 : `PascalCase` & 명사형
- 예시

  ```typescript
  type Message = string | number; // 유니언 타입을 변수에 정의
  function log(msg: Message): void {
    // 매개변수의 타입에 변수를 입력
    console.log(msg);
  }
  const msg3: Message = "world";
  const msg4: Message = 200;
  log(msg3);
  log(msg4);
  ```

- 타입 별칭으로 객체의 타입 선언

  - 객체의 속성명과 속성값의 타입을 지정
  - 속성은 `,` 또는 `;` 으로 구분할 수 있지만 **공식 스타일 가이드에서는 `;`을 권장**
  - 타입 별칭을 타입으로 지정한 객체는 타입 별칭에 정의된 속성명과 속성의 타입을 준수해야 함
  - 예시

    ```typescript
    type User = {
      name: string;
      age: number;
      color?: string; // optional
    };
    // 객체 생성
    const ping1: User = { name: "유저핑", age: 30 };
    const ping2: User = { name: "유저핑" }; // 컴파일 에러(age 속성이 없음)
    const ping3: User = { name: "유저핑", age: "30" }; // 컴파일 에러(age 속성값이 number가 아님)
    const ping4: User = { name: "유저핑", userAge: 30 }; // 컴파일 에러(age 속성이 없음)
    console.log(ping1.age, ping1.color?.toUpperCase()); // color가 정의된 경우에만 출력되고 없으면 출력되지 않음
    ```

### 인터섹션 타입(intersection type)

- 타입 여러개를 하나로 합치기 위해 `&`(AND 연산자) 로 연결한 타입. 타입 별칭을 확장할 때 주로 사용
- 동일한 속성을 인터섹션 타입으로 추가할때 타입이 다르면 `never` 타입이 되면서 해당 속성은 사용이 불가함
- 예시

  ```typescript
  type TodoRegist = {
    id: string;
    title: string;
    content: string;
  };
  // Todo 타입 확장
  type TodoInfo = TodoRegist & {
    id: number; // id: string & number는 존재할 수 없기때문에 never 타입이 됨
    done: boolean;
  };
  ```

### 인터페이스

- 객체의 구조(형식/타입)를 정의하기 위해 사용
- 객체가 어떤 속성을 가지고 어떤 타입을 가져야 하는지, 어떤 메서드를 포함할 수 있는지를 설명(정의) 하는 규칙
- 인터페이스를 타입으로 지정한 객체는 해당 인터페이스에 정의된 속성명과 속성의 타입을 준수해야 함
- JS로 컴파일 하면 제거됨
- 예시

  ```typescript
  // 객체의 타입 선언
  interface Person {
    name: string;
    age: number;
  }
  const user: Person = {
    name: "각박한",
    age: 25,
  };

  // 변수, 함수의 매개변수, 함수의 리턴 타입 선언
  interface User {
    name: string;
    age: number;
  }
  // 변수
  const ping: User = { name: "유저핑", age: 30 };
  // 함수의 매개 변수
  function getAge(user: User): number {
    return user.age;
  }
  // 함수의 리턴 타입
  const createUser = function (name: string, age: number): User {
    return { name, age };
  };
  const u3: User = createUser("유저3", 23);

  // 클래스에 적용 : implements 키워드를 사용해 클래스가 인터페이스를 구현(implements)
  interface Animal {
    name: string;
    move(): void;
  }

  class Dog implements Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }
    move() {
      console.log(`${this.name}가 움직입니다.`);
    }
  }
  ```

  - 인터페이스와 타입의 차이
    | 구분 | interface | type |
    |:---|:---|:---|
    | 확장(확장성) | `extends`, `implements` 키워드로 확장 가능 | `&`(인터섹션 타입)으로 확장 가능 |
    | 중복 선언 | 가능 (자동으로 합쳐짐, Merge) | 불가능 (중복 선언 시 에러) |
    | 표현 범위 | 주로 **객체 타입** 표현에 특화 | 객체, 유니언 타입, 기본 타입 등 **더 다양한 타입** 표현 가능 |
    | 선언 방식 | `interface` 키워드 사용 | `type` 키워드 사용 |
    | JS 변환 시 | 컴파일 후 코드에서 제거됨 (JS로 변환되지 않음) | 컴파일 후 코드에서 제거됨 (JS로 변환되지 않음) |
    | 추천 용도 | 객체 지향 스타일 설계 (클래스, 구조화된 데이터 모델) | 복잡한 타입 조합, 유니언/인터섹션 타입 모델링 |

### 선택적 프로퍼티(optional property)

- 객체의 속성을 선택적으로 부여하고 싶을 때 사용
- 인터페이스 속성명 뒤에 ?를 추가해서 선택 여부(=필수가 아님)를 표시
  : 객체 생성 시 해당 속성을 생략할 수 있으며, 접근 시 없는 값은 `undefined`가 반환 됨
- 예시

```typescript
interface Todo {
  title: string;
  content: string;
  done?: boolean;
}
const todo1: Todo = {
  title: "할일1",
  content: "인터페이스 사용",
  done: true,
};
const todo2: Todo = {
  title: "할일2",
  content: "done 생략",
};
```

### 읽기 전용 프로퍼티(readonly)

- 인터페이스의 속성명앞에 readonly 키워드 추가 : 초기값 저장 후 수정 불가(= 읽기 전용)
- 객체 생성 시에만 값 할당이 가능하고 생성된 이후에는 수정할 수 없는 속성을 만들 때 사용
- 예시

  ```typescript
  interface Todo {
    readonly id: number; // 이후 수정 불가
    title: string;
    content: string;
    done?: boolean;
  }
  const todo1: Todo = { id: 1, title: "할일1", content: "인터페이스 사용", done: true };
  todo1.content = "수정함";
  todo1.id = 2; // 컴파일 에러(id는 readonly 이므로 수정 불가)
  const todo2: Todo = { id: 2, title: "할일2", content: "done 생략" };
  ```

### 인터페이스 상속

- 부모 인터페이스의 속성과 메서드 정의를 자식 인터페이스가 물려 받고 확장
- interface 선언부의 `extends` 키워드 뒤에 상속 받을 부모 인터페이스 지정
- 예시

  ```typescript
  // 할일 등록 시 사용할 TodoRegist 인터페이스
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회 시 사용할 TodoInfo : extends로 TodoRegist를 상속 받음
  interface TodoInfo extends TodoRegist {
    // title: string;
    // content: string;
    id: number;
    done: boolean;
  }

  const todo1: TodoRegist = {
    title: "할일1",
    content: "내용1",
  };
  const todo2: TodoInfo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: false,
  };
  console.log("할일 상세 조회", todo2);
  ```

  <br />
  <br />

---

---

# 2025-04-29

**TypeScript // **

## 수업 내용

### 인터페이스 상속

- 계층 구조로 상속

  - 인터페이스 상속은 여러 단계의 계층 구조로 구성 가능
  - 예시

    ```typescript
    interface Todo {
      title: string;
      content: string;
    }
    interface TodoInfo extends Todo {
      id: number;
      done: boolean;
    }
    interface TodoInfoWithTime extends TodoInfo {
      createdAt: Date;
      updatedAt: Date;
    }
    ```

- 다중 상속

  - 둘 이상의 인터페이스를 상속 받는 것
  - 예시

    ```typescript
    // 할일 등록 시 사용
    interface TodoRegist {
      title: string;
      content: string;
    }

    // 할일 목록 조회 시 사용 : content 필요 없음
    interface TodoList {
      id: number;
      title: string;
      done: boolean;
    }

    // 할일 상세 조회 시 사용
    interface TodoInfo extends TodoRegist, TodoList {
      createdAt: Date;
      updatedAt: Date;
    }

    // 인터페이스에서 일부 속성만 가져오는 유틸리티 타입 <Pick>
    type TodoPick = Pick<TodoList, "id" | "title">;

    const todo: TodoInfo = {
      id: 3,
      title: "할일3",
      content: "내용3",
      done: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    console.log(todo);
    ```

- 인터페이스 재선언(선언 병합)

  - 동일한 이름의 인터페이스를 중복으로 선언 -> 기존 인터페이스에 없는 속성을 추가해서 확장
  - 기존 속성과 중복으로 정의는 가능하지만 동일한 타입이어야 함
  - 예시

    ```typescript
    interface Todo {
      id: string;
      title: string;
      content: string;
    }

    interface Todo {
      // id: number; // type이 다르면 동일한 속성 정의할 수 없음 : 컴파일 에러
      title: string; // type이 같다면 동일한 속성도 상관 없음
      done: boolean;
      createAt: Date;
    }

    const todo: Todo = {
      id: "1",
      title: "할일1",
      content: "내용1",
      done: true,
      createAt: new Date(),
    };

    console.log(todo);

    // 인터섹션 타입을 이용한 Todo 타입 별칭 확장
    type Todo = {
      id: number;
      title: string;
      content: string;
    };

    type TodoInfo = Todo & {
      id: string; // never 타입이 되면서 사용 불가
      title: string; // 가능
      done: boolean;
    };
    ```

### 제네릭

- 함수에서 사용할 매개변수/리턴 타입을 호출하는 시점에 지정하는 것
- 함수 내부의 코드는 동일하고 매개 변수나 리턴 타입만 다를 경우, 제네릭 문법을 이용하면 하나의 함수에서 구현 가능
  ※ 제넥릭에 지정한 문자 `T`는 *아무 문자*나 사용 가능하고 *여러 글자*도 사용 가능 (Type의 앞글자인 T 를 주로 사용)
- 예시

  ```typescript
  function echo<T>(msg: T): T {
    return msg;
  }
  console.log(echo<string>("hello"));
  console.log(echo<number>(100));
  console.log(echo<boolean>(true));
  console.log(echo<string>(300)); // 타입과 달라서 에러 발생

  console.log(echo<string | number>(100)); // 유니온 타입도 됨

  type mytype = number | string | boolean;
  console.log(echo<mytype>(false)); // 타입 별칭도 됨

  // T타입을 받고 R타입을 반환하는 경우 이런 식으로 정의
  function echo<T, R>(msg: T): R {
    return msg;
  }
  console.log(echo<string, number>("hello"));
  ```

- 제네릭 타입 제약 : 제네릭에 전달받을 타입으로 `지정한 타입`만 가능하도록 제약 : `extends` 키워드 사용

  - `<T extends string | number>`
  - `<T extends { length: number }>`
  - 예시

    ```typescript
    function echo<T extends string | number>(msg: T): T {
      return msg;
    }

    console.log(echo<string>("hello"));
    console.log(echo<number>(100));
    // console.log(echo<boolean>(true)); // 타입 에러

    const str = echo<string>("hello");
    const num = echo<number>(3.14159265359);

    console.log(str.toUpperCase(), num.toFixed(2));
    console.log("---------------------------");

    // length가 number인 객체만 허용
    function echo2<T extends { length: number }>(msg: T): T {
      return msg;
    }

    // echo2(100); // 조건에 맞지 않아 에러 발생 (length 속성 없음)
    const str2 = echo2<string>("hello");
    const num2 = echo2<number[]>([10, 20]);

    console.log(str2.length, num2.length);
    ```

- 제네릭 사용처 : 함수, 인터페이스, 클래스 정의에 사용

  - 예시

    ```typescript

    ```

    여기 더 써야함

### 타입 추론

- 명시적으로 타입을 지정하지 않아도 타입스크립트가 코드를 해석하여 적절한 타입을 자동으로 정의
- 변수의 타입 추론

  - 할당된 값과 일치하는 타입으로 정의
  - 선언만 된 상태라면 자동으로 any타입 부여
  - 예시

    ```typescript
    let name = "이일구"; // string으로 타입 추론
    name = 219; // 타입 에러

    const age = 20; // number로 타입 추론

    let name2; // any로 타입 추론
    name2 = "이일구"; // string 타입이 되는게 아니고 여전히 any 타입
    name2 = 219;
    ```

### 리터럴 타입

- 특정 "값" 자체를 타입으로 사용
- string 처럼 문자열 전체가 지정 가능한 타입이 아니라 '하루', '나무' 같은 특정 값만 가지도록 제한하는 타입
- 잘못된 값의 입력을 미리 막아서 타입 안전성을 높임
- 예시
  ```typescript
  function walkWithMyDog(name: "하루" | "나무", time: 1 | 2) {
    console.log(`${time}시간 동안 ${name}와 산책합니다.`);
  }
  walkWithMyDog("하루", 1);
  walkWithMyDog("나무", 2);
  walkWithMyDog("이틀", 3); // 타입 에러
  ```

### 타입 단언 // 웬만하면 쓰지 말것

- 타입스크립트의 타입 추론에 기대지 않고 명시적으로 직접 타입을 지정
- `as` 키워드로 타입을 지정하면 _타입스크립트 컴파일러가 타입 검사를 수행하지 않음_
- 넓은 범위의 타입을 더 구체적인 타입으로 지정할 때 사용

채워햐앧

### 타입 가드

- 함수의 매개 변수로 여러 종류의 타입이 지정되었을 경우(유니온 타입) 정확한 타입 추론을 할수 있도록 TSC에 힌트를 주는 구문
- 주로 조건문을 이용하고 TSC가 조건문의 구문을 인식해서 조건문 내부에서 만큼은 적절한 타입으로 추론할 수 있도록 도와주는 문법

### Non-null assertion : `!`

- Tyescript에서 변수 뒤에 ! 붙임 : 지정한 객체가 `null`이나 `undefined`가 아님을 단언
- 예시

  ```typescript
  const a = document.querySelector('a[href="ch06/ex06-24.js"]');
  a!.textContent += " 클릭"; // null값이 아니라고 단언함으로써 에러 예방 가능
  ```

  <br />
  <br />

---

---

# 2025-04-30

**TypeScript // **

## 수업 내용 : 주요 내장 함수

- COPILOT 사용법

### 주요 내장 함수 - parseInt, parseFloat

- parseInt(string: string, radix?: number): number
  - 지정한 문자열을 정수로 변환
  - 타입 정의
    - string: 숫자로 변환할 문자열
    - radix: 2진수부터 36진수까지 변환할 진법. 기본은 10진수
    - 리턴값: 변환된 숫자
  - 예시
    ```typescript
    console.log(parseInt("100")); // 100
    console.log(parseInt("100", 10)); // 100
    console.log(parseInt("100", 2)); // 4
    console.log(parseInt("100", 16)); // 256
    console.log(parseInt("99.876")); // 99
    ```
- parseFloat(string: string): number
  - 지정한 문자열을 부동소수점 방식의 숫자로 변환
  - 타입 정의
    - string: 숫자로 변환할 문자열
    - 리턴값: 변환된 숫자
  - 예시
    ```typescript
    console.log(parseFloat("99.876")); // 99.876
    ```

### 주요 내장 함수 - setTimeout, clearTimeout

- setTimeout(handler: TimerHandler, timeout?: number, ...arguments): number

  - 비동기적으로 호출되므로 setTimeout 이후의 코드가 먼저 실행
  - delay 값이 0 이어도 현재 실행중인 함수의 코드가 먼저 실행된 후 실행됨
  - 타입 정의
    - handler: 지연 후 실행될 코드나 콜백 함수
      - `type TimerHandler = string | Function;`
    - timeout: 대기 시간( 밀리초 단위, 1초 = 1000ms)
    - arguments: 콜백 함수에 전달될 추가 인자값들
    - 리턴값: 예약을 중지할 때 사용하는 타이머 id(정수)
  - 예시

    ```typescript
    console.log("시작");

    const timerId = setTimeout(() => {
      // 실행 시 3초간 멈춰있는 거X! 아래로 쭉쭉 내려가며 다른 코드들 다 실행하고 나서 3초 지나면 요거 실행 됨
      // 등록 후 실행 없이 지나갔다가 다시 와서 실행하는 거기 때문에 0초를 주더라도 다른 코드들 실행 후에 실행하게 됨
      console.log("3초 후 실행");
    }, 1000 * 3); // 3초 후 실행
    ```

- clearTimeout(id: number | undefined): void
  - 취소할 타이머 id (setTimeout()의 리턴값)
  - id가 undefined일 경우 타이머 취소가 무시됨

### 주요 내장 함수 - setInterval, clearInterval

- setInterval(handler: TimerHandler, timeout?: number, ...arguments): number

  - 지정된 시간 간격으로 특정 코드를 계속 실행하도록 예약
  - 매개변수와 리턴값은 setTimeout과 동일

- clearInterval(id: number | undefined): void

  - 취소할 타이머 id (setInterval()의 리턴값)
  - id가 undefined일 경우 타이머 취소가 무시됨

  - 예시

    ```typescript
    console.log("시작");
    const timerId = setInterval(() => {
      console.log("3초 간격으로 실행");
    }, 1000 * 3); // 3초 간격
    // clearInterval(timerId);
    console.log("종료");
    ```

### 내장 객체 - Math

- Math.abs(x: number): number // 절대값
- Math.round(x: number): number // 반올림
- Math.ceil(x: number): number // 올림
- Math.floor(x: number): number // 내림
- Math.trunc(x: number): number // 소수 버림
- Math.sign(x: number): number // 부호 반환, 양수: 1, 음수: -1, 0: 0
- 예시
  ```typescript
  console.log(Math.abs(-5)); // 5 절대값
  // 소수 첫째자리에서 반올림
  console.log(Math.round(4.6)); // 5
  // 소수 첫째자리에서 올림
  console.log(Math.ceil(4.1)); // 5
  // 소수 첫째자리에서 내림
  console.log(Math.floor(4.9)); // 4
  // 소수 첫째자리에서 내림
  console.log(Math.floor(-4.9)); // -5
  console.log(Math.trunc(4.9)); // 4 소수 버림
  console.log(Math.trunc(-4.9)); // -4 소수 버림
  // 부호, 양수: 1, 음수: -1, 0: 0
  console.log(Math.sign(-10)); // -1
  ```
- Math.max(...values: number[]): number // 인자값들 중 최댓값
- Math.min(...values: number[]): number // 인자값들 중 최솟값
- Math.random(): number // 0이상 1미만 사이의 난수
- Math.pow(x: number, y: number): number // 거듭제곱
- Math.sqrt(x: number): number // 제곱근
- Math.PI: number // 파이값, 3.141592653589793
- 삼각함수 // Math.sin(), Math.cos(), Math.tan()
- 예시
  ```typescript
  // 0 이상 1 미만 사이의 난수
  console.log(Math.random()); // 인자값들 중 최대값
  console.log(Math.max(1, 5, 3)); // 5 // 인자값들 중 최소값
  console.log(Math.min(1, 5, 3)); // 1
  console.log(Math.pow(2, 3)); // 8 거듭제곱
  console.log(Math.sqrt(9)); // 3 제곱근
  console.log(Math.PI); // 3.141592653589793
  ```

### 내장 객체 - JSON

- 객체를 문자열로 변환하거나, 문자열을 다시 객체로 변환할 때 사용하는 내장 객체
- JSON.stringify(value, replacer?, space?): string // JavaScript 값이나 객체를 JSON 문자열로 변환하는 함수
  JavaScript 값이나 객체를 JSON 문자열로 변환하는 함수
  객체를 네트워크로 전송하거나 파일에 저장할 때 문자열로 변환할 필요가 있음(직렬화)

  매개변수
  value: 변환할 값(객체, 배열, 숫자, 문자열 등)
  replacer
  함수: 변환하기 전에 값을 수정할 수 있음
  배열: 변환에 포함할 속성만 지정 가능
  space: 들여쓰기 설정(가독성을 위해 공백 추가)

  반환값
  변환된 JSON 형식의 문자열

- JSON.parse(text, reviver?)
  JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성
  선택적으로, reviver 함수를 인수로 전달할 경우, 결과를 반환하기 전에 변형할 수 있음

매개변수
text: 객체로 변환할 JSON 형식의 문자열
reviver: 변환할 각 속성에 대해 호출되며 reviver가 반환한 값이 모여서 최종 parse()의 반환값이 됨

### 내장 객체 - Object

- 모든 객체의 부모 역할을 하는 내장 객체

  - 객체를 생성하거나 객체 관련 작업을 할 때 사용
  - static 메서드 들과 모든 객체에서 프로토타입 체인에 의해 호출 할 수 있는 메서드로 구성

- Object.keys(o: object): string[] // 객체의 모든 키를 배열로 반환
- Object.values(o: object): any[] // 객체의 모든 값을 배열로 반환
- Object.entries(o: object): [string, any][] // 객체의 모든 속성을 [키, 값] 쌍의 배열로 반환
- Object.assign(target: object, ...sources): any // sources 객체들의 속성을 복사해서 target 객체에 추가(객체의 속성을 병합)
- 매개변수
  - target: 복사된 속성을 저장할 객체
  - sources: 복사할 객체들. 이곳에 지정한 객체들의 속성이 target에 추가됨
  - 리턴값: sources 속성들이 복사된 target 객체
- 예시

  ```typescript
  const haru = { name: "하루", age: 5 };

  console.log(Object.keys(haru)); // ['name', 'age']
  console.log(Object.values(haru)); // ['하루', 5]
  console.log(Object.entries(haru)); // [['name', '하루'], ['age', 5]]

  const newUser = Object.fromEntries([
    ["name", "나무"],
    ["age", 8],
  ]);
  console.log(newUser); // { name: '나무', age: 8 }

  const haru2 = haru;
  haru.age++;
  console.log(haru.age, haru2.age); // 6 6

  const haru3 = Object.assign({}, haru);
  haru.age++;
  console.log(haru.age, haru3.age); // 7 6
  ```

### 내장 객체 - String

- 문자열 데이터를 다루기 위한 래퍼 객체
  - string 값을 감싸 다양한 속성과 메서드를 사용할 수 있게함
  - string 원시형 타입에서 바로 메서드를 호출하면 임시 String 객체를 생성해서 해당 메서드 실행 후 바로 삭제
  - 유사 배열 객체: length 속성이 있고 0부터 시작해서 증가하는 index에 글자가 하나씩 저장되어 있음
  - 모든 메서드는 기존의 문자열을 수정하지 않고 새로문 문자열을 만들어서 반환

### Date

index.htm에 jayjs script 추가

### 내장 객체 Array - push(), pop()

### 내장 객체 Array - unshift(), shift()

### 내장 객체 Array - indexOf(), lastIndexOf()

### 내장 객체 Array - includes(), concat()

### 내장 객체 Array - splice()

### 내장 객체 Array - slice()

ㄴㄴ

- splice와는 달리 원본 배열은 건드리지 않고 복사해서 사용

for each : 함수 호출 후에 끝남. 어디 담지 않음 : 리턴 없음
map : 함수 호출 후 빈 배열에 값 넣어뒀다가 새로운 배열 리턴

## REDUCE : react 배울 때 한다고 함

  <br />
  <br />

---

---

# 2025-05-07

**TypeScript // 에러 핸들링, ESM, defer/async, use strict, 동기 방식과 비동기 방식**

## 수업 내용

### 에러 핸들링 - Error 클래스

- Error 클래스 : 에러 정보를 표현하는 기본 클래스

  - `new Error(message?: string, options?: ErrorOptions) => Error`
    - message: 에러 메세지
    - options: 원본 에러 객체. 중첩 에러를 만들때 cause 속성에 원본 에러를 지정하면 에러를 추적하기 용이함. ES2022에 추가됨

- 주요 속성
  - `name`: 에러 이름. 생성한 에러명(Error, TypeError, ReferenceError, SyntaxError 등)
  - `message`: 에러 설명. 생성자 함수에 전달한 message 문자열
  - `stack`: 콜 스택 정보. 에러가 발생한 시점의 콜스택 정보가 들어있는 문자열
  - `cause`: 중첩 에러를 만들때 지정한 원본 에러

### 에러 핸들링 - 주요 에러 객체

- Error 클래스를 상속 받아서 세분화된 에러를 표현

- TypeError

  - 잘못된 타입 사용
  - 예시: null.fn(), undefined.fn()
  - Uncaught TypeError: Cannot read properties of null (reading 'fn')
  - Uncaught TypeError: Cannot read properties of undefined (reading 'fn')

- ReferenceError

  - 선언되지 않은 변수 접근
  - 예시: console.log(x)
  - Uncaught ReferenceError: x is not defined

- SyntaxError

  - 문법 오류
  - 예시: new Function('x', 'y', 'retrun x + y');

- 사용자 정의 에러
  - Error 클래스를 상속해서 구현

### 에러 핸들링 - try...catch 문

- 예외(에러)가 발생할 수 있는 코드를 안전하게 실행하기 위해서 사용
- try...catch문 없이 실행되는 코드에서 에러가 발생하면 JS 엔진은 콘솔에 에러 메세지와 콜스택 정보를 출력하며 프로그램 실행을 중단
- try...catch문을 사용할 경우 try 블럭 내에서 에러가 발생하면 catch 블럭이 실행된 후 catch 블럭 이후의 코드가 정상적으로 실행
- 선택적으로 finally 블럭을 추가하면 try 블럭의 모든 코드가 정상 실행되거나 에러가 발생해서 catch 블럭이 실행되거나 상관없이 항상 try...catch 문의 마지막에 실행해야 하는 코드를 작성할 수 있음
- 예시

  ```javascript
  function f1() {
    try {
      const fn = new Function("x", "y", "retrun x + y"); // SyntaxError 발생
      console.log(fn(10, 20));
    } catch (err) {
      // 기본적으로 catch에 전달되는 에러는 unknown 타입이 됨 : 타입 체크 필요
      if (err instanceof Error) {
        // 타입 가드로 err 타입 체크
        console.error("에러 발생: ", err.message);
      }
    }
  }

  function f2() {
    f1();
  }

  f2();

  console.log("프로그램 정상 종료");
  ```

### 에러 핸들링 - throw문

- 개발자가 직접 에러를 발생시키는 문법
- 에러를 직접 처리하지 않고 함수를 호출한 쪽으로 전달할때 주로 사용
- 에러가 throw 되면 프로그램 실행이 중지되고 가까운 catch 블럭으로 이동
- 예시

  ```javascript
  /**
   * 두 수를 나눈 결과를 반환
   * @param x 나누어지는 수
   * @param y 나누는 수
   * @returns 나눈 결과
   * @throws 0으로 나눌 수 없습니다.
   */
  function divide(x: number, y: number) {
    if (y === 0) {
      throw new Error("0으로 나눌 수 없습니다.");
    }
    return x / y;
  }

  function f1() {
    try {
      const result1 = divide(10, Math.round(Math.random()));
      console.log(result1);
    } catch (err) {
      if (err instanceof Error) {
        // 타입 가드
        console.log("에러 발생: ", err.message); // 에러 메세지 출력
      }
    }

    const result2 = divide(10, 2);
    console.log(result2);
  }

  function f2() {
    f1();
  }

  f2();

  console.log("정상 종료");
  ```

### Module

- 모듈이란?
  - 코드를 파일 단위로 분리하고, 불필요한 전역 오염 없이 재사용할 수 있게 해줌
  - 파일 자체가 독립된 스코프를 가지므로 모듈내에서 선언한 변수는 전역변수가 아닌 모듈변수로써 모듈 내부에서만 접근 가능
  - 모듈 구성 요소(변수, 함수, 클래스, 타입 별칭, 인터페이스 등)를 명시적으로 내보내기(export) 하면 다른 모듈에서 사용 가능
  - 다른 모듈에서 export한 값을 참조하려면 import 구문을 사용
  - 브라우저에서 모듈을 사용하려면 <script> 태그에 type="module" 속성을 추가
  
- **export** : 모듈 구성 요소(변수, 함수, 클래스, 타입 별칭, 인터페이스 등)를 외부로 내보내 다른 모듈에서 사용할 수 있게 해주는 키워드
  - Named Export
    - 내보내기할 각 구성 요소 앞에 `export` 키워드 지정하거나 `export { plus, minus }` 형태로 선언과 분리해서 따로 작성 가능
    - export는 여러번 사용 가능
    - import 시 중괄호 안에 정확한 구성 요소명을 사용
      - `export function plus(a: number, b: number) { return a + b; }`
      - `export function minus(a: number, b: number) { return a - b; }`
      - `import { plus, minus } from './math.js';`
  
  - Default Export
      - 내보내기할 구성 요소 앞에 export default 키워드 지정
      - export default는 모듈 내에서 한번만 사용 가능
      - import 시 이름은 자유롭게 지정 가능
        - `export default function multiply(a: number, b: number) { return a * b; }`
        - `import MyMath from './math.js';`
  - 예시
    ```typescript
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
    export default function multiply(a: number, b: number) {
      console.log(`${a} * ${b} = ${a * b}`);
      return a * b;
    }

    // 타입 Export
    export type Member = {
      name: string;
      age: number;
    };

    // export default {함수1, 함수2, 함수3} 이런 식으로 객체 형태로 여러개의 함수를 내보낼 수도 있음
    export function plus1(a: number, b: number) {
      console.log(`${a} + ${b} = ${a + b}`);
      return a + b;
    }

    export function minus1(a: number, b: number) {
      console.log(`${a} - ${b} = ${a - b}`);
      return a - b;
    }

    export default { plus1, minus1 };
    ```
  
  
- **import** : 다른 모듈에서 export한 구성 요소를 가져올 때 사용하는 키워드  
  - Named Import
    - export로 내보낸 구성 요소를 중괄호로 감싸서 가져옴
    - 이름이 정확히 일치 해야 하며 필요한 것만 선택해서 import 가능
    - 별칭 사용 가능
      - `import { plus as add, minus } from './math.js';`
  
  - Default Import
    - export default 로 내보낸 구성 요소는 중괄호 없이 자유롭게 이름을 지정해서 import 가능
    - `import MyMath from './math.js';`
  
  - Mixed Import
    - Named Import와 Default Import를 같이 사용 (일관성과 가독성 저하로 권장하지 않음)
    - `import MyMath, { plus, minus } from './math.js';`
    
  - Type Import
    - 타입 별칭이나 인터페이스를 export 했을 경우 import 시 type 키워드 추가 (생략 가능)
    - `import { type Member } from './math.js';`
  
  - 예시
    ```typescript
      // import 구문은 보통 모듈의 최상단에 정의!
      import { plus, minus } from "./math.js"; // Named Export한 함수 import로 가져오기
      plus(1, 2);
      minus(2, 3);

      // Default Export 가져오기 : 이름을 import할 때 마음대로 정함
      import MathMultiply from "./math.js"; // Default Export 가져오기1<함수 1개>
      import Math from "./math.js"; // Default Export 가져오기2<객체>
      MathMultiply(3, 4);
      Math.plus1(1, 2);
      Math.minus1(2, 3);

      // Named Import
      import { plus as add } from "./math.js"; // Named Import로 이름 지정해서 가져오기
      add(1, 2);

      // Mixed Import : 섞어서 가져오기. 혼동을 유발함으로 권장하는 방법은 아님.
      import YourMath, { plus, minus } from "./math.js";
      YourMath.plus1(1, 2);
      YourMath.minus1(2, 3);

      // Type Import : 타입이라고 명시해주는 것이 좋음
      import { type Member } from "./math.js";

      const haru: Member = {
        name: "하루",
        age: 5,
      };
      console.log(haru);

      // Dynamic Import
      // ES2015 Promise 방식
      if (Math.minus1(5, 6) < 0) {
        console.log("다이내믹임포트실행");
        import("./math.js").then((dynamicMath) => {
          dynamicMath.plus(5, 6);
        }); // import해서 js 파일 실행되고 나면 then 뒤의 함수를 호출한다 : callback 함수

        //ES2017 async/await 방식
        const dynamicMath2 = await import("./math.js");
        console.log("다이내믹임포트2실행");
        dynamicMath2.minus(8, 9);
      }
      ```

- CJS vs ESM
  - ESM (**E**CMA**S**cript **M**odules)
    - ES2015에 도입된 자바스크립트의 공식 모듈 표준
    - 내보내기: `export` 키워드 사용
    - 가져오기: `import` 키워드 사용

  - CJS (**C**ommon**JS**)
    - Node.js에서 모듈화를 위해 만들어진 비표준 방식
    - CommonJS: 브라우저 밖에서 실행되는 자바스크립트를 위한 표준
    - 내보내기: `module.exports` 속성 사용
    - 가져오기: `require()` 함수 사용
    - Node.js 12 부터 package.json에 `"type": "module"` 속성을 추가하거나 .mjs 확장자로 만든 파일은 ESM 방식이 적용됨

  - Node.js에서 js, cjs, mjs 확장자
    - `.js`: package.json에 "type": "module" 속성이 있을 경우 ESM 방식으로, 해당 속성이 없을 경우 CJS 방식으로 사용
    - `.cjs`: `"type": "module"` 속성과 상관 없이 CJS 방식의 모듈 사용
    - `.mjs`: `"type": "module"` 속성과 상관 없이 ESM 방식의 모듈 사용

### script 태그의 속성 defer, async

- **기본 (속성 없음)** : 제일 느림  
  - HTML 파싱을 중지하고 스크립트 다운로드
  - 다운로드가 완료되면 스크립트를 즉시 실행
  - 스크립트 실행이 완료되면 HTML 파싱을 재개
  - 스크립트 실행 시간동안 페이지 렌더링 지연이 발생할 수 있음

- **async** : 중간  
  - HTML 파싱과 병렬로 스크립트 다운로드
  - 다운로드가 완료되면 HTML 파싱을 멈추고 스크립트를 즉시 실행
  - async 스크립트가 여러개 있을 경우 작성 순서와 상관없이 다운로드 완료된 스크립트 먼저 실행
  - DOMContentLoaded 이벤트 발생 전, 후 아무때나 실행될 수 있음
  - 스크립트간 실행 순서가 보장되지 않음
  - 외부 스크립트에만(src 속성이 있는 경우) 적용됨
  - 방문자 수 카운트, 접속 통계 기록 등 페이지 내의 스크립트와 독립적인 기능 사용시 주로 사용
  - => DOM을 다루는 코드가 있다면 async 쓰기 부적합
    화면에 DOM과 관련 없는 코드가 그려진다면, 혹은 로드/실행되는 순서가 상관 없는 독립적 기능을 실행할 떄 async 적합

- **defer** : 제일 빠름
  - HTML 파싱과 병렬로 스크립트 다운로드
  - 다운로드가 완료되어도 HTML 파싱이 완료될 때까지 기다렸다가 실행
  - DOMContentLoaded 이벤트 발생 직전에 실행
  - defer 스크립트가 여러개 있을 경우 작성 순서대로 순차 실행
  - 외부 스크립트에만(src 속성이 있는 경우) 적용됨
  - type="module" 속성이 있으면 기본이 defer 속성으로 동작
  - 페이지 렌더링이 우선시 되는 경우 주로 사용
  - => defer 쓰면 DOMContentLoaded 필요 없음. 모듈 간에 의존관계 있는 경우 defer 사용.
    **대부분의 script는 defer 쓰면 됨** 화면이 가장 빨리 그려지는 게 defer!

### use strict

- use strict란?

  - 새로운 버전이 나오면서 보완된 자바스크립트의 **문제적인** 문법적 특징들은 하위 호환을 위해서 `default`가 비활성화 상태임
  - 코드나 함수의 맨 위에 `"use strict"` 지시자를 사용하면 최신 버전 문법이 활성화됨
    - 코드 실수 예방 & 예상치 못한 버그 감소 & 미래 JS 문법과 호환되는 코드 작성 가능
  - 클래스와 모듈의 내부에서는 자동으로 적용됨
  - 타입스크립트 tsconfig.json 파일에 `"strict": true` 나 `"alwaysStrict": true` 로 설정하면 컴파일된 js 파일에 `"use strict";` 자동으로 추가 됨

- 엄격 모드에서 적용되는 주요 문법
  - 선언 없이 변수 사용 시 오류 발생
  - 함수 호출 시 this가 window가 아닌 undefined가 됨
  - 중복 매개변수 사용 금지
  - 미래에 사용될 수 있는 키워드는 식별자로 사용 못함 (지금은 없으나 차기 버전에서 사용될 수도 있는 키워드)
    - `implements` , `interface`, `package`
    - `private`, `protected`, `public` 등

### 동기 방식과 비동기 방식

- 일반 함수
  - 일반 함수는 호출되면 내부의 코드가 순차적으로 실행된 뒤 값을 반환
  - 함수를 호출한 코드는 해당 함수가 반환될 때까지 기다리며, 반환된 이후에 다음 코드가 실행됨
  - 따라서 코드 실행 순서가 명확하며, 흐름의 일관성이 보장됨 (동기 방식)
- 비동기 함수
  - 비동기 함수는 호출되면 작업을 바로 시작하지만, 결과가 준비될 때까지 기다리지 않고 곧바로 리턴됨
  - 비동기 함수는 나중에 결과를 전달할 것을 약속하며, 호출한 코드는 그 사이에 다른 작업을 계속 진행
  - 따라서 코드 실행 순서가 고정되지 않고, 효율적인 작업 분산이 가능함 (비동기 방식)

### 비동기 함수의 결과 처리

- **콜백 방식**  
  - 비동기 작업이 끝난 뒤에 실행할 함수를 인자로 전달해서 결과를 처리
  - 작업이 완료되면 미리 등록한 콜백 함수가 호출돼 결과나 에러를 전달받아 처리하는 방식
  - 예시
   ```typescript
   function f1(resolve: (result: string) => void) {
     const delay = Math.random() * 1000 * 10;
     setTimeout(() => {
       console.log("f1 작업 완료.", delay);
       resolve("f1의 작업 결과."); // 작업 완료 후 콜백 함수 호출
     }, delay);
   }
   f1((result) => {
     console.log("f1의 작업이 완료된 후 호출.", result);
   });
   console.log("작업 종료.");
   ```

- **Promise 방식**  
  - 비동기 작업의 성공 또는 실패 결과를 나중에 전달하기 위한 객체(ES2015에 추가)
  - 어떤 함수가 Promise 객체를 반환한다면 현재 작업을 처리 중이며 작업이 처리 완료되는 미래에 어떤 값을 준비해서 전달할 것이라는 약속
  - Promise 객체를 반환하는 함수는 비동기 함수가 됨
  - Promise 생성자 함수 : Promise 객체 생성에 사용
   - **executor**: 비동기로 처리할 작업을 가진 함수
     - Promise 생성자 함수의 executor 함수 작성 : executor 함수에서 처리할 작업 구현
       - 작업 성공 시 resolve()를 호출하고 인자값으로 작업 결과 전달
       - 작업 실패 시 reject()를 호출하고 인자값으로 실패 사유 전달
   - **resolve**: 작업이 성공적으로 완료 되었을 때 호출할 함수. 인자값은 작업 결과를 전달하는데 사용
   - **reject**: 작업이 실패 했을 때 호출할 함수. 인자값은 실패 사유를 전달하는데 사용

  - 예시
     ```typescript
        function f1() { 
            return new Promise<string>((resolve, reject) => { // 비동기함수 : Promise 반환

              const delay = Math.floor(Math.random() * 1000 * 1);
              console.log(`\t ${delay}ms 동안 작업중...`);

              setTimeout(() => {
                console.log(`\t f1 작업 완료.`, delay); 
                if(delay < 500){
                  resolve('f1 작업 결과.' + delay);
                } else {
                  reject('f1 작업 실패 :' + delay);
                }
              }, delay);
            }); 
          }
     ```
  - Promise 객체의 메서드
    1. then : 작업이 성공했을 때 다음에 뭘 할지 정하는 함수
      - **`promise.then(onfulfilled?, onrejected?);`**
        `onFulfilled` : 작업이 성공(resolve)했을 때 실행할 콜백
        `onRejected` : 작업이 실패(reject)했을 때 실행할 콜백      
      - 예시 
        ```typescript
            function test(){          // f1()은 Promise를 반환하는 비동기 함수
              f1().then((result) => { // 첫 번째 인자: f1이 성공(resolve)했을 때 실행될 콜백 함수
                console.log('f1의 작업이 완료된 후 호출.', result);
              }, (reason) => {       // 두 번째 인자: f1이 실패(reject)했을 때 실행될 콜백 함수
                console.error('f1의 작업이 실패한 후 호출.', reason);
              // 위의 then() 실행이 완료된 후 (성공이든 실패든) 실행될 다음 then
              }).then(()=>{          // 두 번째 then() - 이전 then의 성공 결과든 실패든 무조건 실행됨     
              }).then(()=>{          // 세 번째 then() - 앞선 then()이 성공했을 때 실행됨
              }).then(()=>{          // 네 번째 then() - 앞선 then()이 성공했을 때 실행됨                
              });
            }
        ```
    2. catch : Promise에서 실패(reject)한 경우를 처리하는 전용 메서드 (내부적으로 `then(undefined, onRejected)`와 동일)
      - **`promise.catch(onRejected);`**
        `onrejected`: then()의 onrejected와 동일
        `then()`의 두번째 인자인 onrejected에서 처리하지 않은 에러는 `catch()`에서 처리됨
      - 예시 
        ```typescript
            const p = new Promise((resolve, reject) => {
              reject("에러 발생");
            });

            p.catch(error => {
              console.error("실패 처리:", error);
            });
        ```  
    3. finally : 성공이든 실패든 무조건 마지막에 실행되는 처리 코드
      - **`promise.finally(onFinally);`**
        `onfinally`: Promise의 성공 실패와 상관없이 항상 호출되는 함수
        로딩 스피너 닫기, 파일 닫기, 네트워크 연결 해제, 상태 초기화 등의 목적으로 주로 사용
      - 예시
        ```typescript
          doSomethingAsync()
          .then(result => {
            console.log("성공:", result);
          })
          .catch(error => {
            console.error("에러:", error);
          })
          .finally(() => {
            console.log("무조건 실행됨");
          });
          ```

  - Promise 객체의 static 메서드
    1.  Promise.all(iterable) : 모든 Promise가 성공해야 결과 반환, 하나라도 실패하면 전체 실패
      - 여러 개의 Promise를 동시에 실행한다.
      - 모두 성공하면 각 Promise의 결과들을 모은 배열을 가진 fulfilled 상태의 새로운 Promise 반환
      - 하나라도 실패하면 즉시 reject되고 가장 먼저 실패한 사유를 가진 rejected 상태의 새로운 Promise 반환

    2.  Promise.any(iterable) : 하나라도 성공하면 그 값을 반환, 모두 실패하면 전체 실패 (`AggregateError`)
      - 여러 개의 Promise를 동시에 실행한다.
      - 가장 먼저 성공한 Promise의 결과 반환
      - 모두 실패하면 각 Promise의 실패 사유를 모은 배열을 errors 속성으로 가진 결과 반환
      
    3.  Promise.race(iterable) : 가장 먼저 완료된 Promise의 결과 반환 (resolve 또는 reject 상관없음)
      - 여러 개의 Promise를 동시에 실행
      - 성공, 실패 여부와 상관없이 가장 먼저 끝난(settled) Promise의 결과 반환. 이후 결과는 무시됨
  
    4.  Promise.allSettled(iterable) : 모든 Promise가 완료(resolve 또는 reject)될 때까지 기다림. 모든 작업 결과 반환
      - 여러 개의 Promise를 동시에 실행해서 모든 Promise가 settled 된 후 모든 결과 배열 반환
      - 실패해도 reject 되지 않음
      - 결과 배열에는 각 Promise의 상태(status: fulfilled | rejected)와 결과(value | reason: 결과 | 실패 이유)가 들어감
      
   
- **async/await**  
  - Promise를 쉽게 다루기 위해 ES2017에 추가된 문법
  - 콜백헬이나 then()의 복잡한 체인 방식을 사용하지 않고도 비동기 함수의 순차적인 호출이 가능해서 비동기 코드를 마치 동기 코드처럼 작성할 수 있음
  
  - async 키워드 : 함수 선언부에 붙이는 키워드
    - async 키워드가 붙은 함수는 자동으로 Promise 객체를 반환
    - async 함수가 리턴한 값은 Promise의 resolve()에 값을 전달하는 효과
    - async 함수가 throw한 값은 Promise의 reject()에 값을 전달하는 효과

  - await 키워드 : Promise 객체 앞에 붙이는 키워드
    - Promise가 처리될 때까지(settled) 기다렸다가, 그 결과값을 반환해주는 키워드
    - async 함수 안에서만 사용 가능
    - 코드의 흐름이 동기함수를 호출하는 것과 비슷해서 가독성이 좋아짐
  
<br />
<br />
---

---

# 2025-05-08

**JavaScript // AJAX, BOM, Web APIs**

## 수업 내용

### AJAX(**A**synchronous **J**avascript **A**nd **X**ML)
- 웹 어플리케이션 개발시에 클라이언트와 서버의 통신방법에 대한 형태로, 자바스크립트와 XML에 기반한 비동기 통신기법을 사용
- 자바스크립트로 HTTP요청을 보내고 XML로 응답을 받아서 처리하는 개발 방식
- 현재는 XML 보다 JSON을 더 선호함
- 페이지 이동이나 새로고침 없이 서버에 HTTP 요청을 보내고 DOM API를 이용해 응답 데이터로 화면을 갱신하는 프로그래밍 방식

### XMLHttpRequest
- XMLHttpRequest 생성자 함수
  - 서버와 비동기 통신을 하는 객체
  - new XMLHttpRequest()

- XMLHttpRequest 주요 메서드
표 넣깅

- XMLHttpRequest  속성
 표 넣깅
- 예시
  ```typescript
      function getImages(): void {
        // Ajax 프로그래밍 순서 (: 서버와 페이지 새로고침 없이 통신)
        // 1. XMLHttpRequest 객체 생성
        const xhr = new XMLHttpRequest();

        // 2. 서버에 보낼 요청 준비(open)
        xhr.open('GET', url, true); // get방식으로 url주소에 동기 방식(false)으로

        // 3. 서버에서 받은 응답 데이터 처리
        xhr.addEventListener('load', function() {  
          const result = this.responseText; // 여기서 this : xhr
          console.log(result);
          const data : Cat[] = JSON.parse(result);
          console.log(data[0]["url"]);
          appendImages(data);

        }); 

        // 4. 서버에 요청(send())
        xhr.send();
      }
  ```
  
### Fetch API
- `fetch()`
  - ES6에서 추가
  - 콜백 기반인 XMLHttpRequest 와 달리 **Promise 기반으로** 설계된 HTTP 클라이언트
  - XMLHttpRequest를 대체해서 사용할 수 있는 **표준** API
  - XMLHttpRequest보다는 나은 선택이지만 단점 존재
    - 응답 객체에서 본문을 바로 꺼낼 수 없음 : JSON이나 다른 데이터 타입으로 파싱 필요
    - 네트워크 에러를 제외한 HTTP 응답 에러에 대해서 오류가 발생하지 않음 : 따로 체크 필요
  - => 근래 현업(+react)에서는 axios-라이브러리 주로 사용. next.js 쓰면 fetch 써야 함
  
※ HTTP 상태 코드 (https://developer.mozilla.org/ko/docs/Web/HTTP/Reference/Status)
  - 2xx 정상완료
  - 3xx 리디렉션
  - 4xx 클라이언트쪽오류
  - 5xx 서버쪽오류
  
### axios 라이브러리
- Node.js와 브라우저를 위한 Promise 기반 HTTP 클라이언트
- XMLHttpRequest 객체를 기반으로 동작하므로 Fetch API 보다 호환성 좋음 (지금은 해당X. fetch 전부 가능함)
- 요청 및 응답 인터셉트
- JSON 데이터 자동 변환
- timeout 설정 가능
- `$npm i @types/axios`
- 예시
   ```typescript
   const url = 'https://api.thecatapi.com/v1/images/search';
   async function getImages() {
     try{
       const response = await axios.get<Cat[]>(url);
       const data: Cat[] = response.data; // json 파싱이 필요 없음
       console.log(data);
     } catch(err) {
       // 네트워크 에러나 4xx HTTP 응답 에러 일괄 처리
       console.error(err);
     }
   }
   ```

### BOM(**B**rowser **O**bject **M**odel)
- 웹페이지 외부의 브라우저 자체를 제어하기 위한 객체들의 집합을 정의한 표준
- HTML 표준: https://html.spec.whatwg.org
- window: BOM의 최상위 객체로 모든 전역 변수, 함수, 객체를 포함
  - `alert()`, `setTimeout()`, `innerWidth`, `innerHeight` 등
- window.navigator: 브라우저와 운영체제에 대한 정보 제공
- window.location: 현재 페이지의 URL에 대한 제어(읽기, 수정)
- window.history: 브라우저의 과거 페이지 이동 정보에 대한 제어(읽기, 수정)
- window.screen: 화면 해상도 등의 정보를 제공
  
- **navigator 객체**
  - 브라우저의 정보(버전, 언너, 플랫폼 등)에 접근할 수 있도록 해주는 객체
  - 주로 사용자 환경을 파악하거나 기능 지원 여부를 확인할 때 사용
  - `navigator.userAgent`: 사용자의 브라우저 및 OS 정보를 문자열로 제공
  - `navigator.language`: 브라우저 기본 언어
  - `navigator.platform`: 운영체제 정보
  - `navigator.onLine`: 현재 온라인 상태 여부 확인
  - `navigator.geolocation`: 위치 정보 확인 API
  
 - **location 객체**
  - 현재 문서의 URL 정보를 읽거나 변경할 수 있게 해주는 객체
  - 페이지 이동, 새로고침, 리디렉션 등에 자주 사용
  - `location.assign(url)`: 주어진 URL 이동(history를 남김)
  - `location.replace(url)`: 현재 페이지를 새 URL로 교체(history를 남기지 않음)
  - `location.reload()`: 페이지 새로고침
  - 현재 url 관련 속성
    - https://example.com/about?category=book 일 경우
    - `location.href`: 현재 URL 확인 또는 변경
    - `location.hostname`: 도메인(example.com)
    - `location.pathname`: 경로(/about)
    - `location.protocol`: 프로토콜(https:)
    - `location.search`: 쿼리 스트링(?category=book)
history 객체 screen 객체 -> 안 하고 넘어감 react할 때 다시 나온다고 함

Web APIs 란?

여기 정리 필요


<br />
<br />
---

---

# 2025-05-09

**JavaScript // **

## 수업 내용
- 프로젝트 팀 오후에 발표. 오늘은 브레인스토밍-아이디어 정리 및 기획 예정
- 다음주 월요일에 다같이 초기 환경세팅 예정
- 프로젝트는 아이디어 잘 내서... UI에 너무 힘쓰지 말 것. AI의 도움을 적극적으로 받되, 이해하지 못하는 코드는 사용X
- 의견 분립 시(2:2) 팀장 의견에 힘 싣을 것
- 

### Web Storage API
- Web Storage
  - key-value 형태의 데이터를 저장하기 위한 스토리지
  - 자바스크립트 객체를 다루듯 사용법이 간단
  - 저장 : 스토리지 속성에 값을 지정
  - 읽기 : 스토리지 속성에 접근
  - 로컬 스토리지와 세션 스토리지로 구분
  - 도메인별 각각 별도의 공간에 생성되기 때문에 다른 도메인에서는 접근 불가능

- Web Storage vs. Cookie
  - 기본 크기는 5M byte(쿠키는 4K byte)
  - 서버로 데이터를 보내지 않음(쿠키는 요청 헤더에 자동으로 포함)
  - 만료 기간이 없음(쿠키는 만료기간 지정)
  - 자바스크립트 객체를 저장할 수 있음(쿠키는 문자열만 저장)
  
- 로컬 스토리지
  - 프로그램이나 사용자가 삭제 하지 않는 이상 영구적인 데이터 저장
  - "오늘 하루 이창을 열지 않음" 같이 보안이 필요하지 않은 데이터 저장에 적합
  - 꼭 로그인해서 써야하는 서비스의 경우 자동로그인 여기서 사용

- 세션 스토리지
  - 브라우저(window 객체)와 같은 생존 기간을 가지는 저장 영역
  - 브라우저 탭이 닫히면 세션 스토리지 정보도 사라짐
  - 새로고침이나 페이지 이동 시에는 세션 스토리지 정보는 유지됨
  - 로그인한 사용자 정보 처럼 보안이 필요한 임시 데이터에 적합
  - 다른 종류의 브라우저가 같은 도메인에 접속하더라도 로컬 스토리지나 세션 스토리지는 브라우저 별로 따로 생성
  - 로그인 해서 쓸 수도, 안 하고 쓸 수도 있는 경우 세션 스토리지 사용해서 자동로그인 구현 (: 보안 안전)
  
- 스토리지에 접근
  - 로컬 스토리지 : `window.localStorage` 속성
  - 세션 스토리지 : `window.sessionStorage` 속성

- 스토리지에 값 저장
  - key값을 스토리지 객체의 속성명으로, value값을 속성값으로 직접 저장
  - `localStorage.userId = 'haru';`
  - `localStorage['userId'] = 'namu';`
  - `setItem()` 메서드 이용
  - `localStorage.setItem('userId', 'haru');`

- 스토리지의 값 읽기
  - 스토리지 객체의 속성명으로 읽기
  - `const userId = localStorage.userId;`
  - `const userId = localStorage['userId'];`
  - `getItem()` 메서드 이용
  - `const userId = localStorage.getItem('userId');`
  
- 스토리지의 데이터 삭제
  - delete 연산자 이용
    - `delete localStorage.userId;`
    - `delete localStorage['userId'];`
  - removeItem() 메서드 이용
    - `localStorage.removeItem('userId');`

- 스토리지의 모든 데이터 삭제
  - clear() 메서드 이용 : `localStorage.clear();`

- 기타 스토리지의 속성과 메서드
  - length : 스토리지에 저장된 데이터의 수
  - key(index) : 지정한 인덱스의 키를 반환(없으면 null)

### Web Socket API
- websocket 프로토콜
  - IETF http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol
  - 브라우저와 서버간 양방향 전이중 통신(Full Duplex)을 구현
  - 일반 통신은 ws 프로토콜, 보안 통신은 wss 프로토콜 사용

- websocket을 이용한 통신
  - websocket 프로토콜 구현 서버 필요 (웹소켓 서버)
  - websocket 프로토콜 구현 클라이언트 필요 (웹 브라우저)

- Web Socket Server
  - websocket 프로토콜 구현 서버
  - jWebSocket, pywebsocket, phpwebsocket, web-socket-ruby, socket.io 등
  
- socket.io
  - Node.js의 확장 모듈
  - 이벤트 기반의 통신 API 제공
  - 웹 브라우저가 지원하는 통신 방식으로 자동 접속(web socket, xhr-polling 등)

※ **CORS policy(Cross Origin Resource Sharing)** : 다른 출처(origin)의 리소스에 브라우저가 접근할 수 있도록 허용해주는 보안 정책 (출처(origin)는 다음 3요소가 모두 같아야 같은 출처:`프로토콜://호스트:포트`)
-> 브라우저는 보안 때문에 cross-origin 요청을 제한 : 승인 없이 서버끼리 resource를 주고받는 걸 브라우저가 막는 보안정책