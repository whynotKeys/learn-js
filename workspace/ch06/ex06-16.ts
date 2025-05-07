// 인터페이스 선언 병합
// ex06-15.ts 복사

(() => {
  interface Todo {
    id: string;
    title: string;
    content: string;
  }

  interface Todo {
    // id: number; // type이 다르면 동일한 속성 정의할 수 없음
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
})();
