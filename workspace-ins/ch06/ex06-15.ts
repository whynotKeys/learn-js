// 인터페이스 다중 상속

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 목록 조회시 사용
  interface TodoList {
    id: number;
    title: string;
    done: boolean;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist, TodoList{
    createdAt: Date;
    updatedAt: Date;
  }

  const todo1: TodoRegist = {
    title: '할일1',
    content: '내용1'
  };
  const todo2: TodoList = {
    id: 2,
    title: '할일2',
    done: false,
  };
  const todo3: TodoInfo = {
    id: 3,
    title: '할일3',
    content: '내용3',
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();