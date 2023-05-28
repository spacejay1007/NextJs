"use client";

import axios from "axios";
import { useEffect } from "react";

const MainPosting = (): JSX.Element => {
  const postHandler = async () => {
    await axios
      .post(
        "/api/posts",
        JSON.stringify({
          id: 99,
          title: "t호이",
          desc: "2023년 동안 나온 에러 기록",
          date: "2023-12-30",
          image: "JS.jpg",
          category: "javascript",
        }),
        {
          headers: {
            "Content-Type": `application/json`,
          },
        }
      )
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div>
      <div className="flex ">
        <p>id</p>
        <input style={{ width: 300, border: "1px solid black" }}></input>
      </div>
      <div className="flex ">
        <p>title</p>
        <input style={{ width: 300, border: "1px solid black" }}></input>
      </div>{" "}
      <div className="flex ">
        <p>설명</p>
        <input style={{ width: 300, border: "1px solid black" }}></input>
      </div>{" "}
      <div className="flex ">
        <p>category</p>
        <select style={{ width: 300, border: "1px solid black" }}></select>
      </div>
      <div>
        <button
          onClick={() => {
            postHandler();
          }}
        >
          저장
        </button>
      </div>
    </div>
  );
};

export default MainPosting;
