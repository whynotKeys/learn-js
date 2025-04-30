// 인터페이스 상속

(()=>{
  // 할일 등록시 사용
  interface TodoRegist {
    title: string;
    content: string;
  }

  // 할일 상세 조회시 사용
  interface TodoInfo extends TodoRegist {
    // title: string;
    // content: string;
    id: number;
    done: boolean;
  }

  const todo1: TodoRegist = {
    title: '할일1',
    content: '내용1',
  };
  console.log('등록', todo1);

  const todo2: TodoInfo = {
    id: 1,
    title: '할일1',
    content: '내용1',
    done: false,
  };
  console.log('할일 상세 조회', todo2);
})();