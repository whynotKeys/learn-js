// 제네릭 사용처

(() => {
  // FIXME 타입 오류가 발생하지 않도록 필요한 곳에 타입을 지정하세요.
  // add 메서드로 item을 순차적으로 저장해 두었다가 getAll 메서드로 모두 조회하는 함수
  class List<T> {
    private items: T[] = []; // private : ts에서 쓰는 내부only변수 표시 (js는 #) : 외부에서 접근 불가능
    add(item: T) {
      this.items.push(item);
    }
    getAll(): T[] {
      return this.items;
    }
  }

  const numList = new List<number>();
  numList.add(123.456);
  numList.add(789.123);
  console.log(numList.getAll());
  console.log(numList.getAll()[0].toFixed(2));

  const strList = new List<String>();
  strList.add("hello");
  strList.add("world");
  console.log(strList.getAll());
  console.log(strList.getAll()[1].toUpperCase());
})();
