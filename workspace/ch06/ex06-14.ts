// 인터페이스 상속 - 계층 구조
// ex06-13.ts 복사

(() => {
  // 할일 등록 시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회 시 사용
  interface TodoInfo extends TodoRegist {
    // title: string;
    // content: string;
    id: number;
    done: boolean;
  }

  interface TodoInfoWithDate extends TodoInfo {
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: "할일1",
    content: "내용1",
  };
  const todo2: TodoInfo = {
    id: 2,
    title: "할일2",
    content: "내용2",
    done: false,
  };
  console.log("할일 상세 조회", todo2);

  // 할일3 생성
  const todo3: TodoInfoWithDate = {
    id: 3,
    title: "할일3",
    content: "내용3",
    done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  console.log("날짜 포함", todo3);
})();
