import MainPosting from "./MainPosting";

export const CtMainPosting = () => {
  const postHandlers = async () => {
    const res = await fetch("/api/posts", {
      headers: {
        //데이터 타입 지정
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify({
        id: 99,
        title: "호이",
        desc: "2023년 동안 나온 에러 기록",
        date: "2023-12-30",
        image: "JS.jpg",
        category: "javascript",
      }),
    });
    const data = await res.json().then((result) => console.log(result));

    console.log(res, data);
  };

  return <MainPosting postHandlers={postHandlers} />;
};
