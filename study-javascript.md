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

**Javascript // Switch문**

## 수업 내용

-

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

### break

- 반복문이나 switch문을 즉시 종료
- break를 감싸고 있는 코드 블럭을 빠져나오고 코드 블럭 이후의 코드로 실행이 넘어감

### continue

- 반복문 내에서 남아있는 코드를 건너뛰고 다음 반복으로 실행이 넘어감
