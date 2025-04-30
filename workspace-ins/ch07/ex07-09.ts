// 내장 객체 - Date

(()=>{
  // 오늘 날짜
  const today = new Date();
  console.log(today); // 2023-10-05T07:00:00.000Z

  console.log(today.getFullYear()); // 2025
  console.log(today.getMonth()+1); // 4 (0부터 시작하므로 4월은 3)
  console.log(today.getDate()); // 30
  console.log(today.getDay()); // 3 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  console.log(today.getHours()); // 14
  console.log(today.getMinutes()); // 34
  console.log(today.getSeconds()); // 38

  console.log(today.getTime()); // 1745991315553 (1970년 1월 1일 00:00:00 UTC부터 현재까지의 밀리초)
})();