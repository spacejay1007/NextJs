// 오늘 날짜 넣어주는 함수 (YYYY-MM-DD) string 값으로
export const newDate = () => {
  const date = new Date();
  const newDate =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  return newDate;
};
