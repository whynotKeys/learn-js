// 인터페이스 정의 - 선택적 속성, 읽기 전용 속성

(() => {
  // 객체의 인터페이스 정의
  // id는 읽기 전용으로 지정하고 done은 옵셔널로 지정
  interface Todo {
    readonly id: number;
    title: string;
    content: string;
    done?: boolean;
  }

  const todo1: Todo = {
    id: 1,
    title: "할일1",
    content: "내용1",
    done: false,
  };
  const todo2: Todo = {
    id: 2,
    title: "할일2",
    content: "내용2",
  };

  console.log(todo1);
  console.log(todo2);

  // todo2.id = 5; // readonly값 수정 시 에러 발생
  todo2.title = "할일2-수정";

  console.log(todo2);
})();
