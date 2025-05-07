// 드롭다운 리스트 생성 - 유니온 타입
// ex06-18-03.ts 복사

(() => {
  // 인터페아스 : RULE 규정
  interface DropdownItem {
    value: string | number;
    selected?: boolean;
  }

  // 드롭다운 리스트로 띄울 객체 생성(: 도시)
  const cityList: DropdownItem[] = [
    { value: "Seoul", selected: false },
    { value: "busan" },
    { value: "GwangJu", selected: true },
    { value: "Jeju", selected: false },
  ];

  // 드롭다운 리스트로 띄울 객체 생성(: 우편번호)
  const zipcodeList: DropdownItem[] = [
    { value: 12345, selected: false },
    { value: 34567, selected: true },
    { value: 56789 },
  ];

  // 드론다운 태그에 객체값을 넣는 함수 정의
  function createDropdownList(list: DropdownItem[]) {
    let value;
    let options = "";

    for (let item of list) {
      value = item.value;
      options += `\t<option selected = "${item.selected ? "selected" : ""}">${
        typeof value === "string" ? value.toUpperCase() : value
      }</option>\n`;
    }

    return `<select>\n${options}</select>`;
  }

  /* 출력 결과
  <select>
  <option selected="">seoul</option>
  <option selected="">busan</option>
  <option selected="selected">gwangju</option>
  </select>
  */
  console.log(createDropdownList(cityList));

  /*
  <select>
  <option selected="">12345</option>
  <option selected="selected">34567</option>
  <option selected="">56789</option>
  </select>
  */
  console.log(createDropdownList(zipcodeList));
})();
